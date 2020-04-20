package com.njust.csa.reg.repository.docker;

import com.njust.csa.reg.repository.entities.CspCertificationInfoEntity;

import org.springframework.data.repository.CrudRepository;

public interface CspCertificationInfoRepo extends CrudRepository<CspCertificationInfoEntity, Long> {

    boolean existsByName(String name);

}
