package com.njust.csa.reg.repository.docker;

import com.njust.csa.reg.repository.entities.TableInfoEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TableInfoRepo extends CrudRepository<TableInfoEntity, Long> {
    List<TableInfoEntity> findAllByStatus(String status);
}
