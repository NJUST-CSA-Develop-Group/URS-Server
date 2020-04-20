package com.njust.csa.reg.repository.docker;

import com.njust.csa.reg.repository.entities.CspCertificationScoreEntity;

import org.springframework.data.repository.CrudRepository;

public interface CspCertificationScoreRepo extends CrudRepository<CspCertificationScoreEntity, Long> {

    CspCertificationScoreEntity findBySchoolId(String schoolId);

}
