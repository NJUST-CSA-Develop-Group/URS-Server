package com.njust.csa.reg.model.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class StudentCspFreeInfoDTO {

    /**
     * freeCount : 免费次数
     * freeReason : 免费次数的由来，前端直接展示即可
     */

    private String freeCount;

    private String freeReason;
}
