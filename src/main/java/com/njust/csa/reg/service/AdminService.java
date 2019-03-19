package com.njust.csa.reg.service;

import com.njust.csa.reg.repository.docker.TableInfoRepo;
import com.njust.csa.reg.repository.docker.TableStructureRepo;
import com.njust.csa.reg.repository.docker.UserRepo;
import com.njust.csa.reg.repository.entities.TableInfoEntity;
import com.njust.csa.reg.repository.entities.TableStructureEntity;
import com.njust.csa.reg.repository.entities.UserEntity;
import org.apache.commons.codec.digest.DigestUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
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
        long activityId;
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

        tableInfoRepo.save(tableInfo);
        activityId = tableInfo.getId();

        List<TableStructureEntity> entities = createActivityStructure(activityId, items, -1);
        return -1;
    }


    private List<TableStructureEntity> createActivityStructure(long activityId, JSONArray items, long belongsTo){
        byte index = 0;
        List<TableStructureEntity> entityList = new ArrayList<>();
        Iterator objects = items.iterator();
        for(;objects.hasNext();){
            JSONObject item = (JSONObject)objects.next();
            TableStructureEntity structureEntity = new TableStructureEntity();
            structureEntity.setTableId(activityId);
            structureEntity.setTitle(item.getString("name"));
            structureEntity.setExtension(item.getString("extension"));
            structureEntity.setType(item.getString("type"));
            structureEntity.setIsUnique(item.getBoolean("unique") ? (byte)1 : (byte)0);
            structureEntity.setDefaultValue(item.isNull("defaultValue") ? "" : item.getString("defaultValue"));
            structureEntity.setDescription(item.getString("description"));
            structureEntity.setTips(item.getString("tip")); //TODO 和前端商讨传的tip的格式
            structureEntity.setIndex(index);

            if(structureEntity.getType().equals("group")){
                entityList.addAll(createActivityStructure(activityId, item.getJSONArray("subItem"), structureEntity.getId()));
            }

            if(!item.isNull("case")){
                Iterator cases = item.getJSONArray("case").iterator();
                StringBuilder casesString = new StringBuilder();
                for(;cases.hasNext();){
                    casesString.append(cases.next());
                    if(cases.hasNext()) casesString.append(",");
                }

                structureEntity.setCases(casesString.toString());
            }

            if(!item.isNull("range")){
                JSONArray range = item.getJSONArray("range");
                structureEntity.setRange(range.get(0) + "," + range.get(1));
            }

            if(belongsTo != -1){
                structureEntity.setBelongsTo(belongsTo);
            }

            index++;

            entityList.add(structureEntity);

        }

        return entityList;
    }
}
