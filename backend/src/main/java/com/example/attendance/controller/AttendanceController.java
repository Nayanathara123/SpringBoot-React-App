package com.example.attendance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.*;
import com.example.attendance.repo.Repo;
import com.example.attendance.entity.StudentAttendance;
import com.example.attendance.service.AttendanceService;
import com.example.attendance.dto.AttendanceDTO;
import com.example.attendance.dto.AttendanceRequestDTO;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin(origins = "http://localhost:3000")

public class AttendanceController {
    private final Repo repo;
    @Autowired
    private final AttendanceService service;

    public AttendanceController(Repo r,AttendanceService service) {
        this.repo = r;
        this.service = service;
    }

    // @GetMapping
    // public List<StudentAttendance> all() {
    //     return repo.findAll();
    // }
    @GetMapping
    public List<AttendanceDTO> getAllAttendance() {
        return repo.findAll().stream().map(a -> new AttendanceDTO(
            a.getId(), a.getDate(), a.isPresent(), 
            a.getStudent().getStdName(), a.getCourse().getCourseName()
        )).toList();
    }

    @PostMapping
    public StudentAttendance saveAttendance(
            @RequestBody AttendanceRequestDTO dto) {

            System.out.println("Student ID = " + dto.getStudentId());
            System.out.println("Course ID = " + dto.getCourseId());

        return service.saveAttendance(dto);
    }

    @GetMapping("/{id}")
    public StudentAttendance getAttendanceById(
            @PathVariable Long id) {

        return repo.findById(id).orElseThrow(() ->
                    new RuntimeException("Attendance not found"));
    }

    @PutMapping("/{id}")
    public StudentAttendance updateAttendance(
            @PathVariable Long id,
            @RequestBody AttendanceRequestDTO dto) {

        return service.updateAttendance(id, dto);
    }

    @DeleteMapping("/{id}")
    public void del(@PathVariable Long id) {
        repo.deleteById(id);
    }
}