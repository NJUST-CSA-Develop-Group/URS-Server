package com.njust.csa.reg.controller;

import com.njust.csa.reg.service.AdminService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
public class AdminController {
    private static Map<HttpSession, String> sessionList = new HashMap<>();

    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService){
        this.adminService = adminService;
    }

    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.POST,
            produces = "application/json;charset=UTF-8")
    public ResponseEntity adminLogin(@RequestBody String jsonString, HttpSession session){
        JSONObject json = new JSONObject(jsonString);
        String username = json.getString("username");
        String password = json.getString("password");
        if(sessionList.containsValue(username)){
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }
        if(adminService.login(username, password)){
            sessionList.put(session, username);
            return new ResponseEntity(HttpStatus.OK);
        }
        else{
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }
    }

    @ResponseBody
    @RequestMapping(value = "/logout", method = RequestMethod.GET,
            produces = "application/json;charset=UTF-8")
    public ResponseEntity adminLogout(HttpSession session){
        sessionList.remove(session);
        return new ResponseEntity(HttpStatus.OK);
    }

}
