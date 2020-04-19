package com.njust.csa.reg.repository.docker;

import com.njust.csa.reg.repository.entities.CspFreeInfoEntity;

import org.springframework.data.repository.CrudRepository;

public interface CspFreeInfoRepo extends CrudRepository<CspFreeInfoEntity, Long> {

    CspFreeInfoEntity findBySchoolId(String schoolId);
}
