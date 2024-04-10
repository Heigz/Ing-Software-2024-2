// UsuariosData.jsx
import React, { useState, createContext, useEffect } from 'react';

export const PeliculasDataContext = createContext();

export const PeliculasDataProvider = props => {
    const [nombre, setNombre] = useState([]);
    const [genero, setGenero] = useState([]);
    const [duracion, setDuracion] = useState([]);
    const [inventario, setInventario] = useState([]);


    useEffect(() => {
        addPelicula('Tron', 'Ciencia ficcion', '180', 10);
    }, []);

    const addPelicula = (newNombre, newGenero, newDuracion, newInventario) => {
        setNombre(prevNombre => [...prevNombre, newNombre]);
        setGenero(prevGenero => [...prevGenero, newGenero]);
        setDuracion(prevDuracion => [...prevDuracion, newDuracion]);
        setInventario(prevInventario => [...prevInventario, newInventario]);

    };


    const deletePelicula = (index) => {
        setNombre(prevNombre => prevNombre.filter((_, i) => i !== index));
        setGenero(prevGenero => prevGenero.filter((_, i) => i !== index));
        setDuracion(prevDuracion => prevDuracion.filter((_, i) => i !== index));
        setInventario(prevInventario => prevInventario.filter((_, i) => i !== index));
    };

    const updatePelicula = (index, updatedNombre, updatedGenero, updatedDuracion, updatedInventario) => {
        setNombre(prevNombre => prevNombre.map((n, i) => i === index ? updatedNombre : n));
        setGenero(prevGenero => prevGenero.map((ap, i) => i === index ? updatedGenero : ap));
        setDuracion(prevDuracion => prevDuracion.map((ap, i) => i === index ? updatedDuracion : ap));
        setInventario(prevInventario => prevInventario.map((pw, i) => i === index ? updatedInventario : pw));
    };

    return (
        <PeliculasDataContext.Provider value={{ nombre, genero, duracion, inventario, addPelicula, deletePelicula, updatePelicula }}>
            {props.children}
        </PeliculasDataContext.Provider>
    );
};