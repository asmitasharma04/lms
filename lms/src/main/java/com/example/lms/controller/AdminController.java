package com.example.lms.controller;

import com.example.lms.model.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        // Mock data — in real app, fetch from DB
        List<User> users = Arrays.asList(
                new User(1L, "john", "STUDENT", "john@example.com"),
                new User(2L, "jane", "INSTRUCTOR", "jane@example.com")
        );
        return ResponseEntity.ok(users);
    }
}
