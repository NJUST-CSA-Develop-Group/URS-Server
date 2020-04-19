package com.njust.csa.reg.util;

public enum AuditStatus {
    STATUS_UNCHECK("未审核"),
    STATUS_PERMIT("审核通过"),
    STATUS_REJECT("审核驳回");

    private final String description;

    public String getDescription() {
        return description;
    }

    AuditStatus(String description) {
        this.description = description;
    }
}
