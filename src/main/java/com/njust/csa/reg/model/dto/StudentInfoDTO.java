package com.njust.csa.reg.model.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class StudentInfoDTO {

    private String openId = null;

    private String schoolId = "";

    private String name = null;

    private String grade = null;

    private String phone = null;

    private String qq = null;

}
