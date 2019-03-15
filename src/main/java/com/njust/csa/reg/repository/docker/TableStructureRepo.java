package com.njust.csa.reg.repository.docker;

import com.njust.csa.reg.repository.entities.TableStructureEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TableStructureRepo extends CrudRepository<TableStructureEntity, Long> {
    List<TableStructureEntity> findAllByTableIdOrderByIndex(long tableId);

    List<TableStructureEntity> findAllByBelongsToOrderByIndex(long belongsTo);

    List<TableStructureEntity> findAllByTableIdAndBelongsToOrderByIndex(long tableId, Long BelongsTo);
}
