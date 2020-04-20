package com.njust.csa.reg.model.dto;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class CspScoreUploadDTO {

    /**
     * name : 认证/比赛名
     * passScore : 可获得免费资格的分数，可根据总分、题目定制
     * scoreData : [{"schoolId":"","name":"","totalScore":"","score":""}]
     */

    private String name;

    private String passScore;

    private List<ScoreDataBean> scoreData;

    @NoArgsConstructor
    @Data
    public static class ScoreDataBean {

        /**
         * schoolId :
         * name :
         * totalScore :
         * score :
         */

        private String schoolId;

        private String name;

        private String totalScore;

        private List<Integer> score;
    }
}
