package com.njust.csa.reg.model.dto.camp;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class AccessTokenDTO {

    /**
     * access_token : 6c42a387-4764-4f28-bcfa-62464bdfde50
     * token_type : bearer
     * expires_in : 1799
     * scope : basic
     */

    @JsonProperty("access_token")
    private String accessToken;

    @JsonProperty("token_type")
    private String tokenType;

    @JsonProperty("expires_in")
    private int expiresIn;

    private String scope;
}
