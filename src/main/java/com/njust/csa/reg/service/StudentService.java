package com.njust.csa.reg.service;

import com.njust.csa.reg.repository.docker.StudentRepo;
import com.njust.csa.reg.repository.entities.StudentEntity;
import com.njust.csa.reg.util.FailureException;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class StudentService {

    private final StudentRepo studentRepo;

    public StudentService(StudentRepo studentRepo) {
        this.studentRepo = studentRepo;
    }

    @Transactional
    public void studentLogin(String openId) {
        if (!studentRepo.existsByWechatId(openId)) {
            StudentEntity studentEntity = new StudentEntity();
            studentEntity.setWechatId(openId);
            studentRepo.save(studentEntity);
        }
    }

    @Transactional
    public void bindingSchoolId(String openId, String schoolId) throws FailureException {
        if (studentRepo.existsBySchoolId(schoolId)) {
            throw new FailureException(HttpStatus.CONFLICT, "学号已被绑定，请联系管理员。");
        }
        StudentEntity studentEntity = studentRepo.findByWechatId(openId);
        studentEntity.setSchoolId(schoolId);
        studentRepo.save(studentEntity);
    }
}
