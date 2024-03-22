package com.example.recharge.Services.impl;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.recharge.Model.User;
import com.example.recharge.Model.Enurmate.Role;
import com.example.recharge.Repository.UserRepository;
// import com.example.recharge.Services.AuthenticationService;
import com.example.recharge.dto.request.LoginRequest;
import com.example.recharge.dto.request.RegisterRequest;
import com.example.recharge.dto.response.LoginResponse;
import com.example.recharge.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public String register(RegisterRequest registerRequest) {
        Optional<User> userExist = userRepository.findByEmail(registerRequest.getEmail());
        if (userExist.isPresent()) {
            return "User already exists with email_id" + registerRequest.getEmail();
        }
        var user = User.builder().email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .username(registerRequest.getUsername())
                .mobilenumber(registerRequest.getMobilenumber())
                .role(Role.valueOf(registerRequest.getRole().toString()))
                .account(true).build();
        userRepository.save(user);
        return "User registered successfully";

    }

    @Override
    public LoginResponse login(LoginRequest loginRequest) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
            var user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
            var accessToken = jwtUtil.generateToken(user);
            System.out.println(accessToken);
            System.out.println("user: "+user);
            return LoginResponse.builder()
                                .token(accessToken)
                                .email(user.getEmail())
                                .build();
    }


    // private void revokeAllUserTokens(User user) {
    //     var validUserTokens = tokenRepository.findAllByUser_IdAndExpiredFalseAndRevokedFalse(user.getId());
    //     if (validUserTokens.isEmpty()) {
    //         return;
    //     }
    //     validUserTokens.forEach(token -> {
    //         token.setExpired(true);
    //         token.setRevoked(true);
    //     });
    //     tokenRepository.saveAll(validUserTokens);
    // }
}
