import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function AddAttendance() {

  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [date, setDate] = useState('');
  const [present, setPresent] = useState(true);

  const [studentData, setStudentData] = useState([]);

  const [courses, setCourses] = useState([]);

  //Load student data from local database to frontend
  useEffect(() => {

    axios.get(
      'http://localhost:8080/api/students',
      {
        auth: {
          username: 'admin',
          password: 'password'
        }
      }
    )
    .then(response => {
      setStudentData(response.data);
    });

    // Load courses from local database to frontend
    axios.get(
      'http://localhost:8080/api/courses',
      {
        auth: {
          username: 'admin',
          password: 'password'
        }
      }
    )
    .then(response => {
      setCourses(response.data);
    });

  }, []);

  const saveAttendance = () => {

    //Post method to save attendance data to the backend
    const attendanceData = {
      studentId: Number(studentId),
      courseId: Number(courseId),
      date,
      present
    };

    axios.post(
      'http://localhost:8080/api/attendance',
      attendanceData,
      {
        auth: {
          username: 'admin',
          password: 'password'
        }
      }
    )
    .then(() => {

      alert('Attendance Saved Successfully');

      window.location.href = '/';

    });

  };

  return (

    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-2xl">

        <h1 className="text-3xl font-bold mb-8 text-slate-800">
          Add Attendance
        </h1>

        <div className="space-y-5">

          <select value={studentId} onChange={(e) => setStudentId(e.target.value)}
            className="w-full border p-4 rounded-xl">

            <option value="">Select Student</option>

            {studentData.map(student => (
              <option
                key={student.stdId}
                value={student.stdId}>
                {student.stdName}
              </option>
            ))}
          </select>

          <select value={courseId} onChange={(e) => setCourseId(e.target.value)}
            className="w-full border p-4 rounded-xl">

            <option value="">Select Course</option>

            {courses.map(course => (
              <option
                key={course.id}
                value={course.id}>
                {course.courseName}
              </option>
            ))}
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-4 rounded-xl"/>

          <select
            value={present}
            onChange={(e) => setPresent(e.target.value === 'true')}
            className="w-full border p-4 rounded-xl">
            <option value="null">None</option>
            <option value="true">Present</option>
            <option value="false">Absent</option>
          </select>

          <button
            onClick={saveAttendance}
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700"
          >
            Submit Attendance
          </button>

        </div>

      </div>

    </div>

  );
}

export default AddAttendance;