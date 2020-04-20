package com.njust.csa.reg.controller;

import com.njust.csa.reg.util.FailureBuilder;
import com.njust.csa.reg.util.FailureException;

import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Collections;

@RestControllerAdvice
public class FailureController {

    @ExceptionHandler(FailureException.class)
    public ResponseEntity<String> handleFailure(FailureException failureException) {
        MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
        map.put("Content-Type", Collections.singletonList("application/json"));
        return new ResponseEntity<>(FailureBuilder.buildFailureMessage(failureException.getReason()), map, failureException.getHttpStatus());
    }
}
