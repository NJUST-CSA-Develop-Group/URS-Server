package com.njust.csa.reg.service;

import com.njust.csa.reg.repository.docker.UserRepo;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    private final UserRepo userRepo;

    @Autowired
    public AdminService(UserRepo userRepo){
        this.userRepo = userRepo;
    }

    public boolean login(String username, String password){
        return userRepo.existsByNameAndPassword(username, DigestUtils.md5Hex("NJUST" + password + "CSA"));
    }


}
