import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavbarProvider, NavbarContext } from './NavbarFooter/NavbarContext';

import './App.css';

import Navbar from './NavbarFooter/Navbar';
import MasterData from './MasterData/MasterData';
import ClientData from './MasterData/ClientData/ClientData';
import EnquiryData from './MasterData/EnquiryData/EnquiryData';
import LegalData from './MasterData/LegalData/LegalData';
import PayrollData from './MasterData/PayrollData/PayrollData';
import AccountData from './MasterData/AccountData/AccountData';
import Reports from './Reports/Reports';
import MISReports from './MISReports/MISReports';

function AppContent () {
  const { navbarOpen } = useContext(NavbarContext);

  return (
    <div className={`App ${navbarOpen ? 'navbar-open' : 'navbar-closed'}`}>
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
  );
}

function App() {

  return (
    <NavbarProvider>
      <Router>
        <AppContent />
      </Router>
    </NavbarProvider>
  );
}

export default App;