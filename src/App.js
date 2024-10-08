// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/componentes/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'; // Asegúrate de tener la página de registro

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Cambia Switch por Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Agrega otras rutas según sea necesario */}
      </Routes>
    </Router>
  );
};

export default App;
