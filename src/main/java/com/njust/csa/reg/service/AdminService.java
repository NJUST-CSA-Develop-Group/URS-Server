package com.njust.csa.reg.service;

import com.njust.csa.reg.repository.docker.TableInfoRepo;
import com.njust.csa.reg.repository.docker.TableStructureRepo;
import com.njust.csa.reg.repository.docker.UserRepo;
import com.njust.csa.reg.repository.entities.TableInfoEntity;
import com.njust.csa.reg.repository.entities.UserEntity;
import org.apache.commons.codec.digest.DigestUtils;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.Optional;

@Service
public class AdminService {
    private final UserRepo userRepo;
    private final TableStructureRepo tableStructureRepo;
    private final TableInfoRepo tableInfoRepo;

    @Autowired
    public AdminService(UserRepo userRepo, TableStructureRepo tableStructureRepo,
                        TableInfoRepo tableInfoRepo){
        this.userRepo = userRepo;
        this.tableStructureRepo = tableStructureRepo;
        this.tableInfoRepo = tableInfoRepo;
    }

    public boolean login(String username, String password){
        return userRepo.existsByNameAndPassword(username, DigestUtils.md5Hex("NJUST" + password + "CSA"));
    }

    @Transactional
    public int postActivity(String activityName, String publisherName, Timestamp startTime, Timestamp endTime, JSONArray items){
        TableInfoEntity tableInfo = new TableInfoEntity();
        tableInfo.setTitle(activityName);
        Optional<UserEntity> publisherEntity = userRepo.findByName(publisherName);
        if(!publisherEntity.isPresent()) return -1;
        tableInfo.setPublisher(publisherEntity.get().getId());
        tableInfo.setStartTime(startTime);
        tableInfo.setEndTime(endTime);
        if(startTime.before(new Timestamp(System.currentTimeMillis()))){
            tableInfo.setStatus("open");
        }
        else{
            tableInfo.setStatus("close");
        }


        return -1;
    }


}
