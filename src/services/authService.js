// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Cambia esto según tu configuración

// Función para iniciar sesión
const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data; // Asegúrate de que `token` está en `response.data`
  } catch (error) {
    // Manejo de errores
    throw error.response ? error.response.data : new Error('Error de conexión');
  }
};

// Función para registrar un nuevo usuario
const register = async (usuario, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      usuario,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    // Manejo de errores
    throw error.response ? error.response.data : new Error('Error de conexión');
  }
};

// Crea un objeto con todos los métodos de autenticación
const authService = {
  login,
  register, // Añadir la función de registro aquí
};

// Exporta el objeto authService
export default authService;
