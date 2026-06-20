package com.example.attendance.repo;

import com.example.attendance.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository
        extends JpaRepository<Course, Integer> {
}