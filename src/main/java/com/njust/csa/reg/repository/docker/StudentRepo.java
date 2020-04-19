package com.njust.csa.reg.repository.docker;

import com.njust.csa.reg.repository.entities.StudentEntity;

import org.springframework.data.repository.CrudRepository;

public interface StudentRepo extends CrudRepository<StudentEntity, Long> {

    boolean existsByWechatId(String wechatId);

    StudentEntity findByWechatId(String wechatId);

    boolean existsBySchoolId(String schoolId);
}
