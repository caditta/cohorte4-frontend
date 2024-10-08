// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/componentes/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'; 
import CreateHotel from './pages/CreateHotel'; 
import Hotels from './pages/Hotels'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes> 
        {/* <Route path="/" exact component={Hotels} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-hotel" element={<CreateHotel />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </Router>
  );
};

export default App;
