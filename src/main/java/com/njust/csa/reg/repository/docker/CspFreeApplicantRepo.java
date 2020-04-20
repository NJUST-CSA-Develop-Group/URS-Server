package com.njust.csa.reg.repository.docker;

import com.njust.csa.reg.repository.entities.CspFreeApplicantEntity;

import org.springframework.data.repository.CrudRepository;

import java.sql.Timestamp;
import java.util.List;

public interface CspFreeApplicantRepo extends CrudRepository<CspFreeApplicantEntity, Long> {

    List<CspFreeApplicantEntity> findAllByGmtCreateBetween(Timestamp start, Timestamp end);

}
