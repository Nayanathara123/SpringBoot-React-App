import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {

  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {

  axios.get(
    'http://localhost:8080/api/attendance',
    {
      auth: {
        username: 'admin',
        password: 'password'
      }
    }
  )
  .then(response => {
    setAttendanceData(response.data);
  });

  }, []);

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Student Attendance System
            </h1>

            <p className="text-slate-500 mt-2">
              Manage student attendance records
            </p>
          </div>

          <a href='/add-attendance' className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700">
            Add Attendance
          </a>

        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-200">

              <tr>
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Student Name</th>
                <th className="p-4 text-left">Course</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Status</th>
              </tr>

            </thead>

            <tbody>

              {attendanceData.map(student => (

                <tr
                  key={student.id}
                  className="border-b"
                >

                  <td className="p-4">{student.id}</td>

                  <td className="p-4">
                    {student.studentName}
                  </td>

                  <td className="p-4">
                    {student.course}
                  </td>

                  <td className="p-4">
                    {student.date}
                  </td>

                  <td className="p-4">

                    {student.present ? (

                      <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full">
                        Present
                      </span>

                    ) : (

                      <span className="bg-red-100 text-red-700 px-4 py-1 rounded-full">
                        Absent
                      </span>

                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default App;