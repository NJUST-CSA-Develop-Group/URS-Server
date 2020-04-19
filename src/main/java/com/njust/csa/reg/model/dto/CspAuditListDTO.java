package com.njust.csa.reg.model.dto;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class CspAuditListDTO {

    /**
     * totalPages : 总页数，仅此参数为number
     * data : [{"Id":"审核号","schoolId":"学号","name":"姓名","reason":"申请原因"}]
     */

    private int totalPages;

    private List<DataBean> data;

    @NoArgsConstructor
    @Data
    public static class DataBean {

        /**
         * Id : 审核号
         * schoolId : 学号
         * name : 姓名
         * reason : 申请原因
         */

        private String Id;

        private String schoolId;

        private String name;

        private String grade;

        private String reason;

        private String status;
    }
}
