package com.njust.csa.reg.repository.entities;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.sql.Timestamp;
import java.util.Objects;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@EntityListeners(AuditingEntityListener.class) //启动自动生成时间
@Table(name = "csp_audit", schema = "online_reg_sys", catalog = "")
public class CspAuditEntity {

    private long id;

    private Timestamp gmtCreate;

    private Timestamp gmtModified;

    private String schoolId;

    private String reason;

    private String status;

    private String comment;

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
    @Column(name = "school_id", nullable = false)
    public String getSchoolId() {
        return schoolId;
    }

    public void setSchoolId(String studentId) {
        this.schoolId = studentId;
    }

    @Basic
    @Column(name = "reason", nullable = true, length = 50)
    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    @Basic
    @Column(name = "status", nullable = false, length = 15)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Basic
    @Column(name = "comment", nullable = true, length = 50)
    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CspAuditEntity that = (CspAuditEntity) o;
        return id == that.id && Objects.equals(gmtCreate, that.gmtCreate) && Objects.equals(gmtModified, that.gmtModified) &&
            Objects.equals(schoolId, that.schoolId) && Objects.equals(reason, that.reason) && Objects.equals(status, that.status) &&
            Objects.equals(comment, that.comment);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, gmtCreate, gmtModified, schoolId, reason, status, comment);
    }
}
