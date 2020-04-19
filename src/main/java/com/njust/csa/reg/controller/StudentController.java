package com.njust.csa.reg.controller;

import com.njust.csa.reg.model.dto.LoginDTO;
import com.njust.csa.reg.model.dto.StudentInfoDTO;
import com.njust.csa.reg.service.StudentService;
import com.njust.csa.reg.util.FailureException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("student")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/login")
    public ResponseEntity<StudentInfoDTO> studentLogin(@RequestBody LoginDTO loginDTO, HttpSession httpSession) {
        //TODO: login service
        String openId = "";
        String schoolId = "";

        studentService.studentLogin(openId);

        StudentInfoDTO studentInfoDTO = new StudentInfoDTO();
        studentInfoDTO.setOpenId(openId);
        studentInfoDTO.setSchoolId(schoolId);
        httpSession.setAttribute("openId", openId);
        httpSession.setAttribute("schoolId", schoolId);
        return new ResponseEntity<>(studentInfoDTO, HttpStatus.OK);
    }

    @PostMapping("/schoolid")
    public ResponseEntity<String> studentBindingSchoolId(@RequestBody StudentInfoDTO studentInfoDTO, HttpSession httpSession)
        throws FailureException {
        String openId = (String) httpSession.getAttribute("openId");
        if (openId == null || openId.isEmpty()) {
            throw new FailureException(HttpStatus.UNAUTHORIZED, "请先登录");
        }
        studentService.bindingSchoolId(openId, studentInfoDTO.getSchoolId());
        httpSession.setAttribute("schoolId", studentInfoDTO.getSchoolId());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
