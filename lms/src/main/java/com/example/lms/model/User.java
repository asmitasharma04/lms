package com.example.lms.model;

public class User {
    private Long id;
    private String username;
    private String role;
    private String email;

    public User(Long id, String username, String role, String email) {
        this.id = id;
        this.username = username;
        this.role = role;
        this.email = email;
    }

    // getters
    public Long getId() { return id; }
    public String getUsername() { return username; }
    public String getRole() { return role; }
    public String getEmail() { return email; }
}
