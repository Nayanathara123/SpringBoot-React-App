package com.example.attendance.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;
import com.example.attendance.repo.Repo;
import com.example.attendance.entity.StudentAttendance;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin(origins = "http://localhost:3000")

public class AttendanceController {
    private final Repo repo;

    public AttendanceController(Repo r) {
        this.repo = r;
    }

    @GetMapping
    public List<StudentAttendance> all() {
        return repo.findAll();
    }

    @PostMapping
    public StudentAttendance add(@RequestBody StudentAttendance a) {
        return repo.save(a);
    }

    @PutMapping("/{id}")
    public StudentAttendance upd(@PathVariable Long id, @RequestBody StudentAttendance u) {
        StudentAttendance a = repo.findById(id).orElseThrow();
        a.setStudentName(u.getStudentName());
        a.setCourse(u.getCourse());
        a.setDate(u.getDate());
        a.setPresent(u.isPresent());
        return repo.save(a);
    }

    @DeleteMapping("/{id}")
    public void del(@PathVariable Long id) {
        repo.deleteById(id);
    }
}