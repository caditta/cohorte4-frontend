// src/pages/CreateHotel.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateHotel = () => {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [calificacion, setCalificacion] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/hotels', {
                nombre,
                direccion,
                telefono,
                email,
                calificacion
            });
            navigate('/hotels');
        } catch (error) {
            console.error('Error al crear el hotel:', error.response.data);
            console.error('Error al crear el hotel:', error);
            alert('Error al crear el hotel, por favor intenta de nuevo');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Crear Hotel</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombre" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="direccion" 
                        value={direccion} 
                        onChange={(e) => setDireccion(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="telefono" 
                        value={telefono} 
                        onChange={(e) => setTelefono(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="calificacion" className="form-label">Calificación</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="calificacion" 
                        value={calificacion} 
                        onChange={(e) => setCalificacion(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Crear Hotel</button>
            </form>
        </div>
    );
};

export default CreateHotel;
