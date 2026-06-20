package com.example.attendance.controller;

import com.example.attendance.entity.Student;
import com.example.attendance.repo.StudentRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    private final StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {

        this.studentRepository = studentRepository;
    }

    @GetMapping
    public List<Student> getAllStudents() {

        return studentRepository.findAll();
    }
}