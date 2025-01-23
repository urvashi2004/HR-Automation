import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './MISReports.css';

function MISReports() {
  return (
    <div className="misreports-page">
      <div className="misreports-navbar">
        <ul>
          <li><NavLink to="business-performance" activeClassName="active">Business Performance</NavLink></li>
          <li><NavLink to="client-performance" activeClassName="active">Client Performance</NavLink></li>
          <li><NavLink to="franchisee-performance" activeClassName="active">Franchisee Performance - Target vs Actual</NavLink></li>
          <li><NavLink to="business-analyst" activeClassName="active">Business Analyst</NavLink></li>
          <li><NavLink to="revenue-analyst" activeClassName="active">Revenue Analyst</NavLink></li>
          <li><NavLink to="expenditure-forecast" activeClassName="active">Expenditure Forecast</NavLink></li>
        </ul>
      </div>
      <div className="misreports-content">
        <h1>MIS Reports</h1>
        <h2>
        <Routes>
          <Route path="business-performance" element={<div>Business Performance</div>} />
          <Route path="client-performance" element={<div>Client Performance</div>} />
          <Route path="franchisee-performance" element={<div>Franchisee Performance - Target vs Actual</div>} />
          <Route path="business-analyst" element={<div>Business Analyst</div>} />
          <Route path="revenue-analyst" element={<div>Revenue Analyst</div>} />
          <Route path="expenditure-forecast" element={<div>Expenditure Forecast</div>} />
        </Routes>
        </h2>
      </div>
    </div>
  );
}

export default MISReports;