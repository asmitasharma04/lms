package com.example.lms.controller;

import com.example.lms.dto.AuthResponse;
import com.example.lms.dto.LoginRequest;
import com.example.lms.dto.RegisterRequest;
import com.example.lms.entity.User;
import com.example.lms.repository.UserRepository;
import com.example.lms.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authManager;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest req) {
        if (userRepository.findByUsername(req.getUsername()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new AuthResponse("Username already exists!", null));
        }

        String role = (req.getRole() == null || req.getRole().isBlank())
                ? "STUDENT"
                : req.getRole().trim().toUpperCase();

        User user = new User();
        user.setUsername(req.getUsername());
        user.setPassword(passwordEncoder.encode(req.getPassword()));
        user.setRoles(Set.of(role)); // Store plain roles

        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new AuthResponse("User registered successfully!", null));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest req) {
        try {
            Authentication auth = authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(req.getUsername(), req.getPassword())
            );

            // principal username
            String username = auth.getName();

            // convert authorities ROLE_X -> X to put plain roles in JWT
            List<String> plainRoles = auth.getAuthorities().stream()
                    .map(granted -> granted.getAuthority())     // ROLE_STUDENT
                    .map(r -> r.startsWith("ROLE_") ? r.substring(5) : r) // STUDENT
                    .toList();

            String token = jwtUtil.generateToken(username, plainRoles);

            return ResponseEntity.ok(new AuthResponse("Login successful!", token));
        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new AuthResponse("Invalid credentials!", null));
        }
    }
}
