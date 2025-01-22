import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavbarFooter/Navbar';
import MasterData from './MasterData/MasterData';
import AccountData from './MasterData/AccountData/AccountData';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MasterData />} />
          <Route path="/master-data/*" element={<MasterData />} />
          <Route path="/account-data/*" element={<AccountData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;