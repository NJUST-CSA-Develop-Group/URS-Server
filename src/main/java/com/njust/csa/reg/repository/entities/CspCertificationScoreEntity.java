package com.njust.csa.reg.repository.entities;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@EntityListeners(AuditingEntityListener.class) //启动自动生成时间
@Table(name = "csp_certification_score", schema = "online_reg_sys", catalog = "")
public class CspCertificationScoreEntity {
    private long id;
    private Timestamp gmtCreate;
    private Timestamp gmtModified;
    private long certificationId;
    private String schoolId;
    private String scores;
    private byte isFree;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Basic
    @CreatedDate
    @Column(name = "gmt_create", nullable = false)
    public Timestamp getGmtCreate() {
        return gmtCreate;
    }

    public void setGmtCreate(Timestamp gmtCreate) {
        this.gmtCreate = gmtCreate;
    }

    @Basic
    @LastModifiedDate
    @Column(name = "gmt_modified", nullable = false)
    public Timestamp getGmtModified() {
        return gmtModified;
    }

    public void setGmtModified(Timestamp gmtModified) {
        this.gmtModified = gmtModified;
    }

    @Basic
    @Column(name = "certification_id", nullable = false)
    public long getCertificationId() {
        return certificationId;
    }

    public void setCertificationId(long certificationId) {
        this.certificationId = certificationId;
    }

    @Basic
    @Column(name = "school_id", nullable = false, length = 20)
    public String getSchoolId() {
        return schoolId;
    }

    public void setSchoolId(String schoolId) {
        this.schoolId = schoolId;
    }

    @Basic
    @Column(name = "scores", nullable = false, length = 50)
    public String getScores() {
        return scores;
    }

    public void setScores(String scores) {
        this.scores = scores;
    }

    @Basic
    @Column(name = "is_free", nullable = false)
    public byte getIsFree() {
        return isFree;
    }

    public void setIsFree(byte isFree) {
        this.isFree = isFree;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CspCertificationScoreEntity that = (CspCertificationScoreEntity) o;
        return id == that.id &&
                certificationId == that.certificationId &&
                isFree == that.isFree &&
                Objects.equals(gmtCreate, that.gmtCreate) &&
                Objects.equals(gmtModified, that.gmtModified) &&
                Objects.equals(schoolId, that.schoolId) &&
                Objects.equals(scores, that.scores);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, gmtCreate, gmtModified, certificationId, schoolId, scores, isFree);
    }
}
