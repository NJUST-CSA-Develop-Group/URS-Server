package com.njust.csa.reg.model.dto.camp;

import com.njust.csa.reg.model.dto.StudentInfoDTO;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CampStudentInfoDTO {

    private List<StudentInfoDTO> data;
}
