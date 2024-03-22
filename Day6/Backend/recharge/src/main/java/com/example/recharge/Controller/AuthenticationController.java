package com.example.recharge.Controller;

import org.springframework.web.bind.annotation.RestController;
import static org.springframework.http.HttpStatus.OK;
import com.example.recharge.Services.impl.*;
import com.example.recharge.dto.request.LoginRequest;
import com.example.recharge.dto.request.RegisterRequest;
import com.example.recharge.dto.response.LoginResponse;
import com.example.recharge.Constant.Api;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @PostMapping("/register")
    public ResponseEntity<String> postRegister(@RequestBody RegisterRequest registerRequest) {
        return new ResponseEntity<>(authenticationService.register(registerRequest), OK);
    }
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> postLogin(@RequestBody LoginRequest loginRequest) {
        return new ResponseEntity<>(authenticationService.login(loginRequest), OK);
    }
    
    
}
