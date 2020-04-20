package com.njust.csa.reg.controller;

import com.njust.csa.reg.model.dto.CspAuditStatusDTO;
import com.njust.csa.reg.model.dto.StudentCspFreeInfoDTO;
import com.njust.csa.reg.model.dto.StudentFreeAuditsInfoDTO;
import com.njust.csa.reg.model.dto.SubmitAuditDTO;
import com.njust.csa.reg.service.CspService;
import com.njust.csa.reg.util.FailureException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/csp")
public class CspController {

    private final CspService cspService;

    public CspController(CspService cspService) {
        this.cspService = cspService;
    }

    @GetMapping("/audit/status")
    public ResponseEntity<CspAuditStatusDTO> getAuditStatus() {
        return new ResponseEntity<>(cspService.getAuditStatus(), HttpStatus.OK);
    }

    @GetMapping("/free")
    public ResponseEntity<StudentCspFreeInfoDTO> getFreeInfo(HttpSession httpSession) throws FailureException {
        String schoolId = getSchoolId(httpSession);
        return new ResponseEntity<>(cspService.getStudentCspFreeInfo(schoolId), HttpStatus.OK);
    }

    @PostMapping("/free/audit")
    public ResponseEntity<String> submitFreeAudit(HttpSession httpSession, @RequestBody SubmitAuditDTO submitAuditDTO) throws FailureException {
        String schoolId = getSchoolId(httpSession);
        cspService.submitAudit(schoolId, submitAuditDTO.getReason());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/free/audit")
    public ResponseEntity<StudentFreeAuditsInfoDTO> getAuditsInfo(HttpSession httpSession) throws FailureException {
        String schoolId = getSchoolId(httpSession);
        return new ResponseEntity<>(cspService.getStudentAuditsInfo(schoolId), HttpStatus.OK);
    }

    private String getSchoolId(HttpSession httpSession) throws FailureException {
        String schoolId = (String) httpSession.getAttribute("schoolId");
        if (schoolId == null || schoolId.isEmpty()) {
            String openId = (String) httpSession.getAttribute("openId");
            if (openId == null || openId.isEmpty()) {
                throw new FailureException(HttpStatus.UNAUTHORIZED, "请先登录");
            }
            throw new FailureException(HttpStatus.BAD_REQUEST, "请先绑定学号");
        }
        return schoolId;
    }
}
