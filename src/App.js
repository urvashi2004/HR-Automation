import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavbarFooter/Navbar';
import MasterData from './MasterData/MasterData';
import ClientData from './MasterData/ClientData/ClientData';
import EnquiryData from './MasterData/EnquiryData/EnquiryData';
import LegalData from './MasterData/LegalData/LegalData';
import PayrollData from './MasterData/PayrollData/PayrollData';
import AccountData from './MasterData/AccountData/AccountData';
import Reports from './Reports/Reports';
import MISReports from './MISReports/MISReports';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MasterData />} />
          <Route path="/master-data/*" element={<MasterData />} />
          <Route path="/client-data" element={<ClientData />} />
          <Route path="/enquiry-data" element={<EnquiryData />} />
          <Route path="/legal-data" element={<LegalData />} />
          <Route path="/payroll-data" element={<PayrollData />} />
          <Route path="/account-data/*" element={<AccountData />} />
          <Route path="/reports/*" element={<Reports />} />
          <Route path="/misreports/*" element={<MISReports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;