package com.example.lms.controller;

import com.example.lms.model.Course;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {

    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getCourses() {
        // Mock data — in real app, fetch from DB
        List<Course> courses = Arrays.asList(
                new Course(1L, "Math 101", "Basic Algebra"),
                new Course(2L, "Physics 201", "Introduction to Mechanics")
        );
        return ResponseEntity.ok(courses);
    }
}
