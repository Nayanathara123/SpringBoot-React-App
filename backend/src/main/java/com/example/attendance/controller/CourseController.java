package com.example.attendance.controller;

import com.example.attendance.entity.Course;
import com.example.attendance.service.CourseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {

    private final CourseService service;

    public CourseController(CourseService service) {
        this.service = service;
    }

    @GetMapping
    public List<Course> getCourses() {
        return service.getAllCourses();
    }
}