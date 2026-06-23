import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditAttendance() {

    const { id } = useParams();

    const [attendance, setAttendance] = useState({
        studentId: "",
        courseId: "",
        date: "",
        present: true
    });

    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/attendance/${id}`)
            .then((response) => {
                setAttendance({
                    studentId:response.data.student.stdId,
                    courseId:response.data.course.id,
                    date:response.data.date,
                    present:response.data.present
                });
            });

            axios.get('http://localhost:8080/api/students').then(res => setStudents(res.data));
            axios.get('http://localhost:8080/api/courses').then(res => setCourses(res.data));
    }, [id]);

    const attendanceEditSubmit = async (e) => {

        e.preventDefault();

        await axios.put(
            `http://localhost:8080/api/attendance/${id}`,
            attendance
        );

        alert("Attendance Updated");
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-slate-100 flex justify-center items-center">
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-2xl">

            <h2  className="text-3xl font-bold mb-8 text-slate-800">Edit Attendance</h2>

            <div className="space-y-5">
            <form onSubmit={attendanceEditSubmit}>

                <select
                    value={attendance.studentId}
                    onChange={(e) =>
                        setAttendance({
                            ...attendance,
                            studentId: e.target.value
                        })
                    } className="w-full border p-4 rounded-xl">
                    {students.map(student => (
                        <option
                            key={student.stdId}
                            value={student.stdId}>
                            {student.stdName}
                        </option>
                    ))}
                </select>

                <select
                    value={attendance.courseId}
                    onChange={(e) =>
                        setAttendance({
                            ...attendance,
                            courseId: e.target.value
                        })
                    } className="w-full border p-4 rounded-xl">
                    {courses.map(course => (
                        <option
                            key={course.id}
                            value={course.id}
                        >
                            {course.courseName}
                        </option>
                    ))}
                </select>

                <input
                    type="date"
                    value={attendance.date}
                    onChange={(e) => setAttendance({...attendance, date: e.target.value})}
                    className="w-full border p-4 rounded-xl"/>

                <select
                    value={attendance.present}
                    onChange={(e) => setAttendance({...attendance, present: e.target.value === 'true'})}
                    className="w-full border p-4 rounded-xl">
                    <option value="null">None</option>
                    <option value="true">Present</option>
                    <option value="false">Absent</option>
                </select>

                <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700">
                    Edit Attendance
                </button>

            </form>
            </div>        
        </div>
    </div>
    );
}

export default EditAttendance;