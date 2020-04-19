package com.njust.csa.reg.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.sql.Timestamp;
import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class StudentFreeAuditsInfoDTO {

    /**
     * count : 数据项数
     * data : {"submitTime":"申请时间","reason":"申请理由","result":"申请结果，直接以中文放回"}
     */

    private int count;

    private List<DataBean> data;

    @NoArgsConstructor
    @Data
    public static class DataBean {

        /**
         * submitTime : 申请时间
         * reason : 申请理由
         * result : 申请结果，直接以中文放回
         */

        @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Shanghai")
        private Timestamp submitTime;

        private String reason;

        private String result;

        private String comment;
    }
}
