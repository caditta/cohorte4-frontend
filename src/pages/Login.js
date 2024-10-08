// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Cambia useHistory por useNavigate
import authService from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Usa useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.login(email, password);
      // Guardar el token en localStorage o en el estado global
      localStorage.setItem('token', response.token);
      // Redirigir al usuario a la página de inicio o donde desees
      navigate('/'); // Cambia history.push por navigate
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Error de conexión');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Iniciar Sesión</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
      </form>
      <div className="text-center mt-3">
        <p>¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
      </div>
    </div>
  );
};

export default Login;
