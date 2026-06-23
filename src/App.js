import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddAttendance from './pages/AddAttendance';
import EditAttendance from "./pages/EditAttendance";

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

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />}/>

        <Route path="/add-attendance" element={<AddAttendance />}/>

        <Route path="/edit-attendance/:id" element={<EditAttendance />}/>

      </Routes>

    </BrowserRouter>
    
  );
}

export default App;