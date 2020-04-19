package com.njust.csa.reg.controller;

import com.njust.csa.reg.util.FailureBuilder;
import com.njust.csa.reg.util.FailureException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class FailureController {

    @ExceptionHandler(FailureException.class)
    public ResponseEntity handleFailure(FailureException failureException) {
        return new ResponseEntity(FailureBuilder.buildFailureMessage(failureException.getReason()), failureException.getHttpStatus());
    }
}
