package com.njust.csa.reg.service;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.njust.csa.reg.repository.docker.TableInfoRepo;
import com.njust.csa.reg.repository.docker.TableStructureRepo;
import com.njust.csa.reg.repository.entities.TableInfoEntity;
import com.njust.csa.reg.repository.entities.TableStructureEntity;
import com.njust.csa.reg.util.FailureBuilder;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class AppService {
    private final TableInfoRepo tableInfoRepo;
    private final TableStructureRepo tableStructureRepo;

    @Autowired
    public AppService(TableInfoRepo tableInfoRepo, TableStructureRepo tableStructureRepo) {
        this.tableInfoRepo = tableInfoRepo;
        this.tableStructureRepo = tableStructureRepo;
    }

    //获取所有报名信息
    public String getActivities() {
        JSONArray responseJson = new JSONArray();
        List<TableInfoEntity> tables = tableInfoRepo.findAllByStatus("open");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        for (TableInfoEntity table : tables) {
            JSONObject tableJson = new JSONObject();
            tableJson.put("id", table.getId());
            tableJson.put("name", table.getTitle());
            tableJson.put("publisher", table.getPublisher());
            tableJson.put("startTime", table.getStartTime() != null ? dateFormat.format(table.getStartTime()) : "");
            responseJson.put(tableJson);
        }

        return responseJson.toString();
    }

    public String getActivityStructure(long id) {
        JSONArray responseJson = new JSONArray();
        if (id <= 0) {
            return responseJson.toString();
        }
        List<TableStructureEntity> tableStructures = tableStructureRepo.findAllByTableIdAndBelongsToOrderByIndex(id, null);
        for (TableStructureEntity tableStructure : tableStructures) {
            if(tableStructure.getIsShow() == (byte)1){
                responseJson.put(generateTableStructure(tableStructure));
            }
        }
        return responseJson.toString();
    }

    private JSONObject generateTableStructure(TableStructureEntity tableStructure) {
        JSONObject structureJson = new JSONObject();
        if (tableStructure.getType().equals("group")) {
            JSONArray groupItemsJson = new JSONArray();
            List<TableStructureEntity> groupItems = tableStructureRepo.findAllByBelongsToOrderByIndex(tableStructure.getId());
            for (TableStructureEntity groupItem : groupItems) {
                if(tableStructure.getIsShow() == (byte)1){
                    groupItemsJson.put(generateTableStructure(groupItem));
                }
            }
            structureJson.put("subItem", groupItemsJson);
        }

        structureJson.put("name", tableStructure.getTitle());
        structureJson.put("type", tableStructure.getType());
        structureJson.put("description", tableStructure.getDescription());
        structureJson.put("tip", tableStructure.getTips());

        if(!tableStructure.getDefaultValue().equals(""))
            structureJson.put("defaultValue", tableStructure.getDefaultValue());

        structureJson.put("require", tableStructure.getIsRequired() == (byte)1);

        if(!tableStructure.getCases().equals("")){
            JSONArray casesJson = new JSONArray();
            String[] cases = tableStructure.getCases().split(",");
            for (String aCase : cases) {
                casesJson.put(aCase);
            }
            structureJson.put("cases", casesJson);
        }

        if(!tableStructure.getRange().equals("")){
            JSONArray rangeJson = new JSONArray();
            String[] ranges = tableStructure.getRange().split(",");
            for (String range : ranges) {
                rangeJson.put(range);
            }
            structureJson.put("range", rangeJson);
        }

        return structureJson;
    }
}
