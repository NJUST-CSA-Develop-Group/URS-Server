package com.njust.csa.reg.service;

import com.njust.csa.reg.repository.docker.TableInfoRepo;
import com.njust.csa.reg.repository.entities.TableInfoEntity;
import com.njust.csa.reg.util.FailureBuilder;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.Optional;

@Service
public class AppService {
    private final TableInfoRepo tableInfoRepo;

    @Autowired
    public AppService(TableInfoRepo tableInfoRepo){
        this.tableInfoRepo = tableInfoRepo;
    }

    //获取所有报名信息
    public String getActivities(){
        JSONObject response = new JSONObject();
        JSONArray result = new JSONArray();
        for (TableInfoEntity activity : tableInfoRepo.findAll()) {
            //TODO: 马朴涵
            //这里有每个投票的基本情况，参照API文档，返回正确的格式给前端
            //将内容放进response内即可，方法：response.put("name", "123");
        }
        return response.toString();
    }

    //根据ID获取指定报名信息
    public String getActivityById(long id){
        JSONObject response = new JSONObject();
        TableInfoEntity table = getVote(id);
        if(table == null){
            return FailureBuilder.buildFailureMessage("找不到对应报名信息！");
        }
        //TODO: 赵震
        //这里有特定投票的基本情况，参照API文档，返回正确格式给前端
        return null;
    }

    //更改报名的状态
    public String changeActivityStatus(long id, String status){
        JSONObject response = new JSONObject();
        TableInfoEntity table = getVote(id);
        if(table == null){
            return FailureBuilder.buildFailureMessage("找不到对应报名信息！");
        }
        //TODO: 陈浩东
        //这里现在获取到了要更改状态的报名信息
        //更改他的状态
        //并且参照API文档，返回合适的信息给前端
        tableInfoRepo.save(table);
        return response.toString();
    }

    private TableInfoEntity getVote(long id){
        Optional<TableInfoEntity> tableTemp = tableInfoRepo.findById((int)id);
        return tableTemp.orElse(null);
    }
}
