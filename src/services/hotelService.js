// src/services/hotelService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/hotels'; // Cambia esto según tu configuración

// Función para obtener hoteles
const getHotels = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Devuelve los datos de los hoteles
    } catch (error) {
        console.error('Error al obtener los hoteles:', error);
        throw error; // Lanza el error para manejarlo en el componente
    }
};

// Crea un objeto con todos los métodos de hotel
const hotelService = {
    getHotels,
};

// Exporta el objeto hotelService
export default hotelService;
