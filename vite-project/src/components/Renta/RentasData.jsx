// UsuariosData.jsx
import React, { useState, createContext, useEffect } from 'react';

export const RentasDataContext = createContext();

export const RentasDataProvider = props => {
    const [idUsuario, setIdUsuario] = useState([]);
    const [idPelicula, setIdPelicula] = useState([]);
    const [fechaRenta, setFechaRenta] = useState([]);
    const [diasRenta, setDiasRenta] = useState([]);
    const [estatus, setEstatus] = useState([]);


    useEffect(() => {
        addRenta(0, 1, '2024-12-22', 10, 1);
    }, []);

    const addRenta = (newIdUsuario, newIdPelicula, newFechaRenta, newDiasRenta, newEstatus) => {
        setIdUsuario(prevIdUsuario => [...prevIdUsuario, newIdUsuario]);
        setIdPelicula(prevIdPelicula => [...prevIdPelicula, newIdPelicula]);
        setFechaRenta(prevFechaRenta => [...prevFechaRenta, newFechaRenta]);
        setDiasRenta(prevDiasRenta => [...prevDiasRenta, newDiasRenta]);
        setEstatus(prevEstatus => [...prevEstatus, newEstatus]);

    };

    const updateRenta = (index, updatedEstatus) => {

        setEstatus(prevEstatus => prevEstatus.map((pw, i) => i === index ? updatedEstatus : pw));
    };

    return (
        <RentasDataContext.Provider value={{ idUsuario, idPelicula, fechaRenta, diasRenta, estatus, addRenta, updateRenta }}>
            {props.children}
        </RentasDataContext.Provider>
    );
};