package com.njust.csa.reg.service;

import com.njust.csa.reg.model.dto.CspAuditListDTO;
import com.njust.csa.reg.model.dto.CspAuditStatusDTO;
import com.njust.csa.reg.model.dto.CspFreeApplicantsDTO;
import com.njust.csa.reg.model.dto.StudentCspFreeInfoDTO;
import com.njust.csa.reg.model.dto.StudentFreeAuditsInfoDTO;
import com.njust.csa.reg.model.dto.StudentInfoDTO;
import com.njust.csa.reg.repository.docker.CspAuditRepo;
import com.njust.csa.reg.repository.docker.CspFreeApplicantRepo;
import com.njust.csa.reg.repository.docker.CspFreeInfoRepo;
import com.njust.csa.reg.repository.entities.CspAuditEntity;
import com.njust.csa.reg.repository.entities.CspFreeApplicantEntity;
import com.njust.csa.reg.repository.entities.CspFreeInfoEntity;
import com.njust.csa.reg.util.AuditResult;
import com.njust.csa.reg.util.AuditStatus;
import com.njust.csa.reg.util.CampAccessor;
import com.njust.csa.reg.util.FailureException;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

@Service
public class CspService {

    private static boolean IS_AUDIT_OPEN = false;

    private final CspFreeInfoRepo cspFreeInfoRepo;

    private final CspAuditRepo cspAuditRepo;

    private final CampAccessor campAccessor;

    private final CspFreeApplicantRepo cspFreeApplicantRepo;

    public CspService(CspFreeInfoRepo cspFreeInfoRepo, CspAuditRepo cspAuditRepo, CampAccessor campAccessor,
        CspFreeApplicantRepo cspFreeApplicantRepo) {
        this.cspFreeApplicantRepo = cspFreeApplicantRepo;
        this.cspAuditRepo = cspAuditRepo;
        this.cspFreeInfoRepo = cspFreeInfoRepo;
        this.campAccessor = campAccessor;
    }

    public CspAuditStatusDTO getAuditStatus() {
        CspAuditStatusDTO cspAuditStatusDTO = new CspAuditStatusDTO();

        String statusString = IS_AUDIT_OPEN ? "STATUS_OPEN" : "STATUS_CLOSE";
        cspAuditStatusDTO.setStatus(statusString);

        return cspAuditStatusDTO;
    }

    public StudentCspFreeInfoDTO getStudentCspFreeInfo(String schoolId) {
        CspFreeInfoEntity cspFreeInfoEntity = cspFreeInfoRepo.findBySchoolId(schoolId);
        StudentCspFreeInfoDTO studentCspFreeInfoDTO = new StudentCspFreeInfoDTO();
        if (cspFreeInfoEntity == null) {
            studentCspFreeInfoDTO.setFreeCount("0");
            studentCspFreeInfoDTO.setFreeReason("您尚未拥有免费资格记录");
        } else {
            studentCspFreeInfoDTO.setFreeCount(String.valueOf(cspFreeInfoEntity.getFreeCount()));
            if (cspFreeInfoEntity.getFreeCount() <= 0) {
                studentCspFreeInfoDTO.setFreeReason("您的免费资格数已用完！");
            } else {
                studentCspFreeInfoDTO.setFreeReason(cspFreeInfoEntity.getReason());
            }
        }
        return studentCspFreeInfoDTO;
    }

    @Transactional
    public void submitAudit(String schoolId, String reason) throws FailureException {

        CspAuditEntity cspAuditEntity = new CspAuditEntity();
        cspAuditEntity.setReason(reason);
        cspAuditEntity.setSchoolId(schoolId);

        AuditStatus auditStatus = AuditStatus.STATUS_UNCHECK;

        CspFreeInfoEntity cspFreeInfoEntity = cspFreeInfoRepo.findBySchoolId(schoolId);
        if (cspFreeInfoEntity != null) {
            if (cspFreeInfoEntity.getFreeCount() >= 1) {
                cspFreeInfoEntity.setFreeCount(cspFreeInfoEntity.getFreeCount() - 1);
                int index = cspFreeInfoEntity.getReason().indexOf(";");
                String useString = cspFreeInfoEntity.getReason().substring(0, index);
                String reasonString = cspFreeInfoEntity.getReason().substring(index + 1);
                cspFreeInfoEntity.setReason(reasonString);
                cspFreeInfoRepo.save(cspFreeInfoEntity);
                try {
                    addStudentInfoApplicant(cspAuditEntity);
                } catch (FailureException failureException) {
                    TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
                    throw failureException;
                }
                auditStatus = AuditStatus.STATUS_PERMIT;
                cspAuditEntity.setComment("系统自动通过，使用免费资格：" + useString);
            }
            cspAuditEntity.setStatus(auditStatus.toString());
            cspAuditRepo.save(cspAuditEntity);
        }

        cspAuditEntity.setStatus(AuditStatus.STATUS_UNCHECK.toString());
        cspAuditRepo.save(cspAuditEntity);
    }

    public StudentFreeAuditsInfoDTO getStudentAuditsInfo(String schoolId) {
        StudentFreeAuditsInfoDTO studentFreeAuditsInfoDTO = new StudentFreeAuditsInfoDTO();
        List<CspAuditEntity> cspAuditEntityList = cspAuditRepo.findAllBySchoolId(schoolId);

        studentFreeAuditsInfoDTO.setCount(cspAuditEntityList.size());
        List<StudentFreeAuditsInfoDTO.DataBean> dataBeanList = new ArrayList<>();
        studentFreeAuditsInfoDTO.setData(dataBeanList);

        for (CspAuditEntity cspAuditEntity : cspAuditEntityList) {
            StudentFreeAuditsInfoDTO.DataBean dataBean = new StudentFreeAuditsInfoDTO.DataBean();
            dataBean.setSubmitTime(cspAuditEntity.getGmtModified());
            dataBean.setReason(cspAuditEntity.getReason());
            dataBean.setResult(cspAuditEntity.getStatus());
            dataBean.setComment(cspAuditEntity.getComment());
            dataBeanList.add(dataBean);
        }
        return studentFreeAuditsInfoDTO;
    }

    public void changeAuditStatus(String s) {
        IS_AUDIT_OPEN = "STATUS_OPEN".equals(s);
    }

    public CspAuditListDTO getAuditList(int pageNum, int pageSize, AuditStatus auditStatus) throws FailureException {
        Page<CspAuditEntity> cspAuditEntityPage;
        if (auditStatus == null) {
            cspAuditEntityPage = cspAuditRepo.findAll(PageRequest.of(pageNum - 1, pageSize));
        } else {
            cspAuditEntityPage = cspAuditRepo.findByStatus(auditStatus.toString(), PageRequest.of(pageNum - 1, pageSize));
        }
        CspAuditListDTO cspAuditListDTO = new CspAuditListDTO();
        cspAuditListDTO.setTotalPages(cspAuditEntityPage.getTotalPages());
        List<CspAuditListDTO.DataBean> dataBeanList = new ArrayList<>();
        cspAuditListDTO.setData(dataBeanList);
        for (CspAuditEntity cspAuditEntity : cspAuditEntityPage) {
            CspAuditListDTO.DataBean dataBean = new CspAuditListDTO.DataBean();
            dataBean.setId(String.valueOf(cspAuditEntity.getId()));
            Map<String, StudentInfoDTO> studentInfoDTOMap = campAccessor.getStudentBasicInfo(dataBean.getSchoolId());
            dataBean.setName(studentInfoDTOMap.get(cspAuditEntity.getSchoolId()).getName());
            dataBean.setGrade(studentInfoDTOMap.get(cspAuditEntity.getSchoolId()).getGrade());
            dataBean.setSchoolId(cspAuditEntity.getSchoolId());
            dataBean.setReason(cspAuditEntity.getReason());
            dataBean.setStatus(AuditStatus.valueOf(cspAuditEntity.getStatus()).getDescription());
            dataBeanList.add(dataBean);
        }
        return cspAuditListDTO;
    }

    @Transactional
    public void checkResult(long auditId, AuditResult auditResult, String comment) throws FailureException {
        Optional<CspAuditEntity> cspAuditEntityOptional = cspAuditRepo.findById(auditId);
        if (!cspAuditEntityOptional.isPresent()) {
            throw new FailureException(HttpStatus.NOT_FOUND, "审核未找到：" + auditId);
        }
        CspAuditEntity cspAuditEntity = cspAuditEntityOptional.get();
        if (!AuditStatus.STATUS_UNCHECK.toString().equals(cspAuditEntity.getStatus())) {
            throw new FailureException(HttpStatus.FORBIDDEN, "资源不允许变动");
        }
        if (auditResult == AuditResult.AUDIT_PERMIT) {
            cspAuditEntity.setStatus(AuditStatus.STATUS_PERMIT.toString());
            try {
                addStudentInfoApplicant(cspAuditEntity);
            } catch (Exception e) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
                throw e;
            }
        } else {
            cspAuditEntity.setStatus(AuditStatus.STATUS_REJECT.toString());
        }
        cspAuditEntity.setComment(comment);
        cspAuditRepo.save(cspAuditEntity);
    }

    public CspFreeApplicantsDTO getFreeApplicants(Timestamp start, Timestamp end) throws FailureException {
        CspFreeApplicantsDTO cspFreeApplicantsDTO = new CspFreeApplicantsDTO();
        List<CspFreeApplicantEntity> cspFreeApplicantEntityList = cspFreeApplicantRepo.findAllByGmtCreateBetween(start, end);
        cspFreeApplicantsDTO.setCount(cspFreeApplicantEntityList.size());
        List<CspFreeApplicantsDTO.DataBean> dataBeanList = new ArrayList<>();
        cspFreeApplicantsDTO.setData(dataBeanList);
        for (CspFreeApplicantEntity cspFreeApplicantEntity : cspFreeApplicantEntityList) {
            CspFreeApplicantsDTO.DataBean dataBean = new CspFreeApplicantsDTO.DataBean();
            StudentInfoDTO studentInfoDTO = campAccessor.getStudentBasicInfo(cspFreeApplicantEntity.getSchoolId())
                .get(cspFreeApplicantEntity.getSchoolId());
            dataBean.setName(studentInfoDTO.getName());
            dataBean.setSchoolId(cspFreeApplicantEntity.getSchoolId());
            dataBean.setGrade(studentInfoDTO.getGrade());
            dataBean.setSubmitTime(cspFreeApplicantEntity.getGmtCreate());
            dataBeanList.add(dataBean);
        }
        return cspFreeApplicantsDTO;
    }

    @Transactional
    public void addStudentInfoApplicant(CspAuditEntity cspAuditEntity) throws FailureException {
        CspFreeApplicantEntity cspFreeApplicantEntity = new CspFreeApplicantEntity();
        StudentInfoDTO studentInfoDTO = campAccessor.getStudentBasicInfo(cspAuditEntity.getSchoolId()).get(cspAuditEntity.getSchoolId());
        cspFreeApplicantEntity.setSchoolId(cspAuditEntity.getSchoolId());
        cspFreeApplicantEntity.setName(studentInfoDTO.getName());
        cspFreeApplicantEntity.setGrade(studentInfoDTO.getGrade());

        cspFreeApplicantRepo.save(cspFreeApplicantEntity);
    }

}
