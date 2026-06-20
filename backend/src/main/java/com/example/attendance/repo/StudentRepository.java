package com.example.attendance.repo;

import com.example.attendance.entity.Student;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository
        extends JpaRepository<Student, Integer> {

}