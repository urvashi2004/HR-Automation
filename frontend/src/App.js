import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './NavbarFooter/Navbar';
import Home from "./Home/Home";
import Employees from "./Employees/Employees";
import Attendance from "./Attendance/Attendance";
import Payroll from "./Payroll/Payroll";
import Profile from "./Profile/Profile"; // Import the HRProfile component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/profile" element={<Profile />} /> {/* Add the HRProfile route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;