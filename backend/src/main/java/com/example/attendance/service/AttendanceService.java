package com.example.attendance.service;

import com.example.attendance.dto.AttendanceRequestDTO;
import com.example.attendance.entity.StudentAttendance;
import com.example.attendance.entity.Course;
import com.example.attendance.entity.Student;
import com.example.attendance.repo.AttendanceRepository;
import com.example.attendance.repo.CourseRepository;
import com.example.attendance.repo.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;


@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    public StudentAttendance saveAttendance(
            AttendanceRequestDTO dto) {

        Student student = studentRepository
                .findById(dto.getStudentId())
                .orElseThrow(() ->
                        new RuntimeException("Student not found"));

        Course course = courseRepository
                .findById(dto.getCourseId())
                .orElseThrow(() ->
                        new RuntimeException("Course not found"));

        StudentAttendance attendance =
                new StudentAttendance();

        attendance.setStudent(student);
        attendance.setCourse(course);
        attendance.setDate(dto.getDate());
        attendance.setPresent(dto.isPresent());

        return attendanceRepository.save(attendance);

    }


    public StudentAttendance updateAttendance(
        Long id,
        AttendanceRequestDTO dto) {

        StudentAttendance attendance =
                attendanceRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Attendance not found"));

        Student student =
                studentRepository.findById(dto.getStudentId())
                .orElseThrow(() ->
                        new RuntimeException("Student not found"));

        Course course =
                courseRepository.findById(dto.getCourseId())
                .orElseThrow(() ->
                        new RuntimeException("Course not found"));

        attendance.setStudent(student);
        attendance.setCourse(course);
        attendance.setDate(dto.getDate());
        attendance.setPresent(dto.isPresent());

        return attendanceRepository.save(attendance);
    }
}
