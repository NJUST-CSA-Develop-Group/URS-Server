package com.njust.csa.reg.repository.docker;

import com.njust.csa.reg.repository.entities.CspAuditEntity;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface CspAuditRepo extends PagingAndSortingRepository<CspAuditEntity, Long> {

    List<CspAuditEntity> findAllBySchoolId(String schoolId);

    Page<CspAuditEntity> findByStatus(String status, Pageable p);
}
