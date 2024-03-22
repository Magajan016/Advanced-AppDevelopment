package com.example.recharge.Services.impl;

import com.example.recharge.dto.request.LoginRequest;
import com.example.recharge.dto.request.RegisterRequest;
import com.example.recharge.dto.response.LoginResponse;

public interface AuthenticationService {

    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);
    
}
