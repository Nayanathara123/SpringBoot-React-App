package com.example.attendance.repo;

import com.example.attendance.entity.StudentAttendance;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendanceRepository
        extends JpaRepository<StudentAttendance, Long> {
}