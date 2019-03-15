package com.njust.csa.reg.repository.entities;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "applicant_info_view", schema = "online_reg_sys", catalog = "")
public class ApplicantInfoViewEntity {
    private long tableId;
    private byte questionIndex;
    private String title;
    private String type;
    private String applicantValue;
    private int applicantNumber;
    private long id;


    @Column(name = "table_id", nullable = false)
    public long getTableId() {
        return tableId;
    }

    public void setTableId(long tableId) {
        this.tableId = tableId;
    }

    @Basic
    @Column(name = "question_index", nullable = false)
    public byte getQuestionIndex() {
        return questionIndex;
    }

    public void setQuestionIndex(byte questionIndex) {
        this.questionIndex = questionIndex;
    }

    @Basic
    @Column(name = "title", nullable = false, length = 50)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Basic
    @Column(name = "type", nullable = false, length = 30)
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Basic
    @Column(name = "applicant_value", nullable = false, length = 1000)
    public String getApplicantValue() {
        return applicantValue;
    }

    public void setApplicantValue(String applicantValue) {
        this.applicantValue = applicantValue;
    }

    @Basic
    @Column(name = "applicant_number", nullable = false)
    public int getApplicantNumber() {
        return applicantNumber;
    }

    public void setApplicantNumber(int applicantNumber) {
        this.applicantNumber = applicantNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ApplicantInfoViewEntity that = (ApplicantInfoViewEntity) o;
        return tableId == that.tableId &&
                questionIndex == that.questionIndex &&
                applicantNumber == that.applicantNumber &&
                Objects.equals(title, that.title) &&
                Objects.equals(type, that.type) &&
                Objects.equals(applicantValue, that.applicantValue) &&
                Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, tableId, questionIndex, title, type, applicantValue, applicantNumber);
    }

    @Id
    @Column(name = "id", nullable = false)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
