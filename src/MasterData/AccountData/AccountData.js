import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './AccountData.css';

function AccountData() {
  return (
    <div className="account-data-page">
      <div className="account-data-navbar">
      <ul>
          <li><NavLink to="invoice-data" activeClassName="active">Invoice Data</NavLink></li>
          <li><NavLink to="other-income" activeClassName="active">Other Income</NavLink></li>
          <li><NavLink to="payroll-payment" activeClassName="active">Pay Roll Payment</NavLink></li>
          <li><NavLink to="franchisee-payment" activeClassName="active">Franchisee Payment</NavLink></li>
          <li><NavLink to="expenditure-data" activeClassName="active">Expenditure Data</NavLink></li>
          <li><NavLink to="taxation-payment" activeClassName="active">Taxation Payment</NavLink></li>
        </ul>
      </div>
      <div className="account-data-content">
      <h1>Account Data</h1>
        <h2>
          <Routes>
          <Route path="invoice-data" element={<div>Invoice Data</div>} />
          <Route path="other-income" element={<div>Other Income</div>} />
          <Route path="payroll-payment" element={<div>Pay Roll Payment</div>} />
          <Route path="franchisee-payment" element={<div>Franchisee Payment</div>} />
          <Route path="expenditure-data" element={<div>Expenditure Data</div>} />
          <Route path="taxation-payment" element={<div>Taxation Payment</div>} />
        </Routes>
        </h2>
      </div>
    </div>
  );
}

export default AccountData;