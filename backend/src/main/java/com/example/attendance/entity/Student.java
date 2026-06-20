package com.example.attendance.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "student_data")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    @Column(name = "std_id")
    private Integer stdId;

    @Column(name = "std_name")
    private String stdName;

    @Column(name = "tel")
    private String tel;

    @Column(name = "address")
    private String address;

    @Column(name = "age")
    private Integer age;

    // Default Constructor
    public Student() {
    }

    // Parameterized Constructor
    public Student(
            String stdName,
            String tel,
            String address,
            Integer age) {

        this.stdName = stdName;
        this.tel = tel;
        this.address = address;
        this.age = age;
    }

    // Getters and Setters

    public Integer getStdId() {
        return stdId;
    }

    public void setStdId(Integer stdId) {
        this.stdId = stdId;
    }

    public String getStdName() {
        return stdName;
    }

    public void setStdName(String stdName) {
        this.stdName = stdName;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}