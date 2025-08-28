package com.example.lms.controller;

import com.example.lms.dto.RegisterRequest;
import com.example.lms.entity.User;
import com.example.lms.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        User saved = authService.register(user);
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        // ⚠️ In JWT setup, you usually authenticate with AuthenticationManager
        // Here just return a dummy response for testing
        return ResponseEntity.ok("Login successful (JWT generation goes here)");
    }
}




//package com.example.lms.controller;
//
//import com.example.lms.dto.RegisterRequest;
//import com.example.lms.entity.User;
//import com.example.lms.service.AuthService;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//        import java.util.Set; // 💡 Don't forget to import java.util.Set!
//
//@RestController
//@RequestMapping("/auth")
//public class AuthController {
//
//    private final AuthService authService;
//
//    public AuthController(AuthService authService) {
//        this.authService = authService;
//    }
//
//    @PostMapping("/register")
//    public ResponseEntity<User> register(@RequestBody RegisterRequest registerRequest) {
//        // Create a User entity from the DTO
//        User user = new User();
//        user.setUsername(registerRequest.getUsername());
//        user.setPassword(registerRequest.getPassword());
//
//        // ✅ Correct way to set the roles:
//        // Create a Set containing the single role from the request
//        user.setRoles(Set.of(registerRequest.getRole()));
//
//        // Now, you can pass the correctly populated User entity to your service
//        User saved = authService.register(user);
//        return ResponseEntity.ok(saved);
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestBody User user) {
//        return ResponseEntity.ok("Login successful (JWT generation goes here)");
//    }
//}
