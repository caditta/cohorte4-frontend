// src/pages/Hotels.js
import React, { useEffect, useState } from 'react';
import hotelService from '../services/hotelService'; // Asegúrate de que este servicio existe

const Hotels = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const data = await hotelService.getHotels(); // Asegúrate de que este método esté definido
                setHotels(data);
            } catch (error) {
                console.error('Error al obtener los hoteles:', error);
            }
        };
        fetchHotels();
    }, []);

    return (
        <div>
            <h1>Lista de Hoteles</h1>
            <ul>
                {hotels.map(hotel => (
                    <li key={hotel.id_hotel}>{hotel.nombre} - {hotel.direccion} - {hotel.telefono} - {hotel.estrellas}</li>
                ))}
            </ul>
        </div>
    );
};

export default Hotels;
