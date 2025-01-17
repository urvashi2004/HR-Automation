import React, { useState } from 'react';
import './Attendance.css';

function Attendance() {
  const [attendance, setAttendance] = useState([
    { id: 1, name: 'John Doe', attendance: ['Present', 'Absent', 'Leave', 'Present', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future'] },
    { id: 2, name: 'Jane Smith', attendance: ['Absent', 'Present', 'Present', 'Leave', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future'] },
    { id: 3, name: 'Alice Johnson', attendance: ['Leave', 'Absent', 'Present', 'Present', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future'] },
    { id: 4, name: 'Bob Brown', attendance: ['Present', 'Present', 'Absent', 'Leave', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future', 'Future'] },
  ]);

  const markAttendance = (id, day, status) => {
    setAttendance(attendance.map(record => 
      record.id === id ? { ...record, attendance: record.attendance.map((s, i) => i === day ? status : s) } : record
    ));
  };

  const daysInMonth = Array.from({ length: 15 }, (_, i) => i + 1);
  const currentDay = new Date().getDate() - 1; // Adjust for zero-based index

  return (
    <div className="attendance-page">
      <h1>Attendance</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {daysInMonth.map(day => (
              <th key={day}>{day}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              {record.attendance.map((status, day) => (
                <td key={day}>
                  <span className={`status-dot ${status.toLowerCase()}`}></span>
                </td>
              ))}
              <td>
                <select
                  onChange={(e) => markAttendance(record.id, currentDay, e.target.value)}
                  defaultValue="Future"
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Leave">Leave</option>
                  <option value="Future">Future</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="legend">
        <span><span className="status-dot present"></span> Present</span>
        <span><span className="status-dot absent"></span> Absent</span>
        <span><span className="status-dot leave"></span> Leave</span>
        <span><span className="status-dot future"></span> Future</span>
      </div>
    </div>
  );
}

export default Attendance;