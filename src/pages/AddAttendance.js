import React, { useState } from 'react';
import axios from 'axios';

function AddAttendance() {

  const [studentName, setStudentName] = useState('');
  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');
  const [present, setPresent] = useState(true);

  const saveAttendance = () => {

    const attendanceData = {
      studentName,
      course,
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

          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full border p-4 rounded-xl"
          />

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