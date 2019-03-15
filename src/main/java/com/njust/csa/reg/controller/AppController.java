package com.njust.csa.reg.controller;

import com.njust.csa.reg.service.AppService;
import com.njust.csa.reg.util.FailureBuilder;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
public class AppController {
    private final AppService appService;

    @Autowired
    public AppController(AppService appService){
        this.appService = appService;
    }

    @RequestMapping(value = "/activity", method = RequestMethod.GET,
            produces = "application/json;charset=UTF-8")
    public String getActivities(){
        return appService.getActivities();
    }
}
