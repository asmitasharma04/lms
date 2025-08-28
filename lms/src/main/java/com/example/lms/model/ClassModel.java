package com.example.lms.model;

public class ClassModel {
    private Long id;
    private String name;
    private String description;
    private int studentCount;

    public ClassModel(Long id, String name, String description, int studentCount) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.studentCount = studentCount;
    }

    // getters and setters
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getDescription() { return description; }
    public int getStudentCount() { return studentCount; }
}
