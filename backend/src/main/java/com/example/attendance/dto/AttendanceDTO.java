package com.example.attendance.dto;

import java.time.LocalDate;

public record AttendanceDTO(Long id, LocalDate date, boolean present, String studentName, String courseName) {}