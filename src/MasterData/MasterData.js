import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './MasterData.css';

function MasterData() {
  return (
    <div className="master-data-page">
      <div className="master-data-navbar">
        <ul>
          <li><NavLink to="admin-page" activeClassName="active">Admin Page</NavLink></li>
          <li><NavLink to="employee-data" activeClassName="active">Employee Data</NavLink></li>
          <li><NavLink to="franchisee-data" activeClassName="active">Franchisee Data</NavLink></li>
          <li><NavLink to="taxation-data" activeClassName="active">Taxation Data</NavLink></li>
          <li><NavLink to="income-head-data" activeClassName="active">Income Head Data</NavLink></li>
          <li><NavLink to="expenditure-data" activeClassName="active">Expenditure Data</NavLink></li>
        </ul>
      </div>
      <div className="master-data-content">
      <h1>Master Data</h1>
        <h2>
        <Routes>
          <Route path="admin-page" element={<div>Admin Page</div>} />
          <Route path="employee-data" element={<div>Employee Data</div>} />
          <Route path="franchisee-data" element={<div>Franchisee Data</div>} />
          <Route path="taxation-data" element={<div>Taxation Data</div>} />
          <Route path="income-head-data" element={<div>Income Head Data</div>} />
          <Route path="expenditure-data" element={<div>Expenditure Data</div>} />
        </Routes>
        </h2>
      </div>
    </div>
  );
}

export default MasterData;