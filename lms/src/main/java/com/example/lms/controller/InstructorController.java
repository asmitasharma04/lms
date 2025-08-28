package com.example.lms.controller;

import com.example.lms.model.ClassModel;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/instructor")
public class InstructorController {

    @GetMapping("/classes")
    public ResponseEntity<List<ClassModel>> getClasses() {
        // Mock data — in real app, fetch from DB
        List<ClassModel> classes = Arrays.asList(
                new ClassModel(1L, "Math 101", "Basic Algebra", 25),
                new ClassModel(2L, "Physics 201", "Mechanics", 20)
        );
        return ResponseEntity.ok(classes);
    }
}
