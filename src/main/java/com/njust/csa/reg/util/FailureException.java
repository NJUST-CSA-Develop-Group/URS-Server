package com.njust.csa.reg.util;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public class FailureException extends Exception {

    private HttpStatus httpStatus;

    private String reason;

    public FailureException(HttpStatus httpStatus, String reason) {
        super(httpStatus.value() + ": " + reason);
        this.httpStatus = httpStatus;
        this.reason = reason;
    }
}
