package com.njust.csa.reg.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.sql.Timestamp;
import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class CspFreeApplicantsDTO {

    /**
     * count : 人数
     * data : {"schoolId":"学号","grade":"年级","name":"姓名"}
     */

    private int count;

    private List<DataBean> data;

    @NoArgsConstructor
    @Data
    public static class DataBean {

        /**
         * schoolId : 学号
         * grade : 年级
         * name : 姓名
         */

        private String schoolId;

        @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
        private Timestamp submitTime;

        private String grade;

        private String name;
    }
}
