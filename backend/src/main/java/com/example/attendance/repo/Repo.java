package com.example.attendance.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.attendance.entity.StudentAttendance;

public interface Repo extends JpaRepository<StudentAttendance, Long> {
}