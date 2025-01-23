import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './Reports.css';

function Reports() {
  return (
    <div className="reports-page">
      <div className="reports-navbar">
        <ul>
          <li><NavLink to="client-data" activeClassName="active">Client Data</NavLink></li>
          <li><NavLink to="enquiry-data" activeClassName="active">Enquiry Data</NavLink></li>
          <li><NavLink to="payroll-sheet" activeClassName="active">Pay Roll Sheet</NavLink></li>
          <li><NavLink to="legal-data" activeClassName="active">Legal Data</NavLink></li>
          <li><NavLink to="franchisee-data" activeClassName="active">Franchisee Data</NavLink></li>
          <li><NavLink to="job-roll-data" activeClassName="active">Job Roll Data</NavLink></li>
          <li><NavLink to="expenditure-data" activeClassName="active">Expenditure Data</NavLink></li>
          <li><NavLink to="revenue-module" activeClassName="active">Revenue Module</NavLink></li>
          <li><NavLink to="tds-paid-or-due-data" activeClassName="active">TDS Paid or Due Data</NavLink></li>
          <li><NavLink to="taxation-data" activeClassName="active">Taxation Data</NavLink></li>
        </ul>
      </div>
      <div className="reports-content">
      <h1>Reports</h1>
      <h2>
        <Routes>
          <Route path="client-data" element={<div>Client Data</div>} />
          <Route path="enquiry-data" element={<div>Enquiry Data</div>} />
          <Route path="payroll-sheet" element={<div>Pay Roll Sheet</div>} />
          <Route path="legal-data" element={<div>Legal Data</div>} />
          <Route path="franchisee-data" element={<div>Franchisee Data</div>} />
          <Route path="job-roll-data" element={<div>Job Roll Data</div>} />
          <Route path="expenditure-data" element={<div>Expenditure Data</div>} />
          <Route path="revenue-module" element={<div>Revenue Module</div>} />
          <Route path="tds-piador-due-data" element={<div>TDS Piador Due Data</div>} />
          <Route path="taxation-data" element={<div>Taxation Data</div>} />
        </Routes>
        </h2>
      </div>
    </div>
  );
}

export default Reports;