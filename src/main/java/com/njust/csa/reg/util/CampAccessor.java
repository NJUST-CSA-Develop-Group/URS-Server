package com.njust.csa.reg.util;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.njust.csa.reg.model.dto.StudentInfoDTO;
import com.njust.csa.reg.model.dto.camp.AccessTokenDTO;
import com.njust.csa.reg.model.dto.camp.CampStudentInfoDTO;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

@Component
public class CampAccessor {

    @Value("${camp.app.key}")
    private String appKey;

    @Value("${camp.app.secret}")
    private String appSecret;

    @Value("${camp.host}")
    private String campHost;

    @Value("${camp.port}")
    private String port;

    private String accessToken;

    private Timestamp expireTime;

    public Map<String, StudentInfoDTO> getStudentBasicInfo(String... schoolIds) throws FailureException {
        ensureAccessTokenValidate("client_credentials");
        StringBuilder schoolIdStrings = new StringBuilder();
        for (String schoolId : schoolIds) {
            schoolIdStrings.append(schoolId).append(",");
        }
        HttpUrl httpUrl = new HttpUrl.Builder().scheme("http")
            .host(campHost)
            .port(Integer.parseInt(port))
            .addPathSegment("api")
            .addPathSegment("users")
            .addPathSegment("basic")
            .addQueryParameter("access_token", accessToken)
            .addQueryParameter("schoolIds", schoolIdStrings.toString())
            .build();
        Request request = new Request.Builder().get().url(httpUrl).build();

        CampStudentInfoDTO campStudentInfoDTO = (CampStudentInfoDTO) getResponseInfo(request, CampStudentInfoDTO.class);
        Map<String, StudentInfoDTO> studentInfoDTOMap = new HashMap<>();
        for (StudentInfoDTO datum : campStudentInfoDTO.getData()) {
            studentInfoDTOMap.put(datum.getSchoolId(), datum);
        }
        return studentInfoDTOMap;
    }

    private void getAccessToken(String type) throws FailureException {
        switch (type) {
            case "client_credentials":
                HttpUrl httpUrl = new HttpUrl.Builder().scheme("http")
                    .host(campHost)
                    .port(Integer.parseInt(port))
                    .addPathSegment("oauth")
                    .addPathSegment("token")
                    .addQueryParameter("grant_type", type)
                    .addQueryParameter("client_id", appKey)
                    .addQueryParameter("client_secret", appSecret)
                    .addQueryParameter("scope", "basic")
                    .build();
                final Request request = new Request.Builder().url(httpUrl)
                    .post(RequestBody.create("", MediaType.parse("application/json; charset=utf-8")))
                    .build();

                AccessTokenDTO accessTokenDTO = (AccessTokenDTO) getResponseInfo(request, AccessTokenDTO.class);

                accessToken = accessTokenDTO.getAccessToken();
                expireTime = new Timestamp(System.currentTimeMillis() + (accessTokenDTO.getExpiresIn() * 1000));
                return;
            case "authorization_code":
            default:
                //TODO code here.
        }
    }

    private void ensureAccessTokenValidate(String type) throws FailureException {
        if (accessToken == null || accessToken.isEmpty() || expireTime == null || expireTime.before(new Timestamp(System.currentTimeMillis()))) {
            getAccessToken(type);
        }
    }

    private Object getResponseInfo(Request request, Class<?> objectClass) throws FailureException {
        OkHttpClient okHttpClient = new OkHttpClient();
        Response response;
        Object obj;
        try {
            response = okHttpClient.newCall(request).execute();
            if (!response.isSuccessful()) {
                throw new FailureException(HttpStatus.INTERNAL_SERVER_ERROR, "OAuth授权服务器响应错误: \n" + Objects.requireNonNull(response.body()).string());
            }
            String responseString = Objects.requireNonNull(response.body()).string();
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
            obj = objectMapper.readValue(responseString, objectClass);
        } catch (Exception e) {
            e.printStackTrace();
            if (e instanceof FailureException) {
                throw (FailureException) e;
            } else {
                throw new FailureException(HttpStatus.INTERNAL_SERVER_ERROR, "OAuth申请发送失败");
            }
        }
        return obj;
    }

}
