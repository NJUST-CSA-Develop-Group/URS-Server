package com.njust.csa.reg.model.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class CheckAuditDTO {

    /**
     * result : 允许：AUDIT_PERMIT、拒绝：AUDIT_REJECT
     * comment : 备注（原因）
     */

    private String result;

    private String comment;
}
