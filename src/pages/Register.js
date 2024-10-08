// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import authService from '../services/authService';

const Register = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useNavigate ();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.register(nombreUsuario, email, password);
      setMessage(response.message);
      if (response.status === 201) {
        history.push('/login'); // Redirige al login después del registro exitoso
      }
    } catch (error) {
      setMessage(error.message || 'Error en el servidor');
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4" style={{ width: '400px' }}>
        <h3 className="mb-4 text-center">Registrarse</h3>

        {message && <div className="alert alert-info">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="nombreUsuario">Nombre de Usuario</label>
            <input
              type="text"
              className="form-control"
              id="nombreUsuario"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
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

          <div className="form-group mb-3">
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

          <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
