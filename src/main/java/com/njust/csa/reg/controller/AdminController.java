package com.njust.csa.reg.controller;

import com.njust.csa.reg.service.AdminService;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;

@Controller
public class AdminController {
    private static Map<String, String> sessionList = new HashMap<>();

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
        if(adminService.login(username, password)){
            sessionList.merge(username, session.getId(), (key, value) -> value = session.getId());
            session.setAttribute("username", username);
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
        if(session.getAttribute("username") != null){
            sessionList.remove(session.getAttribute("username").toString());
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    // 创建报名
    @ResponseBody
    @RequestMapping(value = "/admin/activity", method = RequestMethod.POST,
            produces = "application/json;charset=UTF-8")
    public ResponseEntity<String> postActivity(@RequestBody String jsonString, HttpSession session){

        if(checkUser(session)){
            JSONObject json = new JSONObject(jsonString);
            String activityName;
            Timestamp startTime;
            Timestamp endTime;
            JSONArray items;
            try{
                activityName = json.getString("name");
                startTime = json.isNull("startTime") ? null : Timestamp.valueOf(json.getString("startTime"));
                endTime = json.isNull("endTime") ? null : Timestamp.valueOf(json.getString("endTime"));
                items = json.getJSONArray("items");

                long activityId = adminService.postActivity(activityName,
                        session.getAttribute("username").toString(), startTime, endTime, items);
                if(activityId != -1){
                    JSONObject response = new JSONObject();
                    response.put("id", activityId);
                    return new ResponseEntity<>(response.toString(), HttpStatus.OK);
                }
                else{
                    return new ResponseEntity<>("", HttpStatus.NOT_ACCEPTABLE);
                }
            } catch (Exception e){
                e.printStackTrace();
                return new ResponseEntity<>("", HttpStatus.NOT_ACCEPTABLE);
            }
        }
        else{
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
    }

    @ResponseBody
    @RequestMapping(value = "/user", method = RequestMethod.POST,
            produces = "application/json;charset=UTF-8")
    public ResponseEntity<String> getUsers(HttpSession session){
        if(checkUser(session)){
            return new ResponseEntity<>(adminService.getUser(), HttpStatus.OK);
        }
        else return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
    }

    @ResponseBody
    @RequestMapping(value = "/admin/activity", method = RequestMethod.GET,
            produces = "application/json;charset=UTF-8")
    public ResponseEntity<String> adminGetActivity(HttpSession session){
        if(checkUser(session)){
            return new ResponseEntity<>(adminService.getActivity(), HttpStatus.OK);
        }
        else return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
    }

    @ResponseBody
    @RequestMapping(value = "/admin/activity/{id}/status", method = RequestMethod.PUT,
            produces = "application/json;charset=UTF-8")
    public ResponseEntity setActivityStatus(@PathVariable long id, @RequestBody String jsonString, HttpSession session){
        if(checkUser(session)){
            byte status = (byte)Integer.parseInt(new JSONObject(jsonString).getString("status"));
            if(adminService.setActivityStatus(id, status)){
                return new ResponseEntity(HttpStatus.ACCEPTED);
            }
            else return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
        }
        else return new ResponseEntity(HttpStatus.UNAUTHORIZED);
    }

    // 检查当前用户连接是否已经登陆
    private boolean checkUser(HttpSession session){
        String userName = session.getAttribute("username") == null ?
                null : session.getAttribute("username").toString();
        return userName != null && sessionList.get(userName).equals(session.getId());
    }
}
