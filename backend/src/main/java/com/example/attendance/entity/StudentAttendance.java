package com.example.attendance.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "student_attendance")
public class StudentAttendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //private int student_id;
    //private int course_id;
    private LocalDate date;
    private boolean present;

    public Long getId() {
        return id;
    }

    // public int getStudentId() {
    //     return student_id;
    // }

    // public void setStudentId(int std_id) {
    //     this.student_id = std_id;
    // }

    // public int getCourseId() {
    //     return course_id;
    // }

    // public void setCourseId(int c_id) {
    //     this.course_id = c_id;
    // }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate ddDate) {
        this.date = ddDate;
    }

    public boolean isPresent() {
        return present;
    }

    public void setPresent(boolean present) {
        this.present = present;
    }

    //Getters for student and course
    public Student getStudent() {
        return student;
    }

    public Course getCourse() {
        return course;
    }

    //Setters for student and course
    public void setStudent(Student student) {
        this.student = student;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    // Many-to-one relationship with Student and Course entities
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "student_id", referencedColumnName = "std_id")
    private Student student;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "course_id", referencedColumnName = "c_id")
    private Course course;
    
}