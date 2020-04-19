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
@Table(name = "csp_free_info", schema = "online_reg_sys", catalog = "")
public class CspFreeInfoEntity {

    private long id;

    private Timestamp gmtCreate;

    private Timestamp gmtModified;

    private String schoolId;

    private int freeCount;

    private String reason;

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
    @Column(name = "school_id", nullable = false, length = 20)
    public String getSchoolId() {
        return schoolId;
    }

    public void setSchoolId(String schoolId) {
        this.schoolId = schoolId;
    }

    @Basic
    @Column(name = "free_count", nullable = false)
    public int getFreeCount() {
        return freeCount;
    }

    public void setFreeCount(int freeCount) {
        this.freeCount = freeCount;
    }

    @Basic
    @Column(name = "reason", nullable = true, length = 100)
    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CspFreeInfoEntity that = (CspFreeInfoEntity) o;
        return id == that.id && freeCount == that.freeCount && Objects.equals(gmtCreate, that.gmtCreate) &&
            Objects.equals(gmtModified, that.gmtModified) && Objects.equals(schoolId, that.schoolId) && Objects.equals(reason, that.reason);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, gmtCreate, gmtModified, schoolId, freeCount, reason);
    }
}
