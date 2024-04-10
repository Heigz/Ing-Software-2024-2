// UpdateForms.jsx
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Styles from './UpdateForms.module.css';
import { PeliculasDataContext } from '../../../PeliculasData';

function UpdateForms() {
    const location = useLocation();
    const idPelicula = location.state ? location.state.idPelicula : null; // Check if location.state is not null before accessing idPelicula

    const { updatePelicula } = useContext(PeliculasDataContext);

    const handleUpdate = (event) => {
        event.preventDefault();
        // Get the updated pelicula data from the form or state
        const updatedNombre = event.target.nombre.value;
        const updatedGenero = event.target.genero.value;
        const updatedDuracion = event.target.duracion.value;
        const updatedInventario = event.target.inventario.value;
        const index = Number(idPelicula);
        updatePelicula(index, updatedNombre, updatedGenero, updatedDuracion, updatedInventario);
        alert(`Pelicula ${idPelicula} modificada con éxito`);
        event.target.reset();
    }

    return (
        <div className={Styles.div}>
            <section className={Styles.container}>
                <form action="#" onSubmit={handleUpdate}>
                    <h2 className={Styles.h2}>Modificar pelicula {idPelicula}</h2>
                    <div className={Styles.content}>
                        <div className={`${Styles['input-box']}`}>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" placeholder="Ingrese el nombre" name="nombre" id="nombre" required />
                        </div>

                        <div className={`${Styles['input-box']}`}>
                            <label htmlFor="genero">Genero</label>
                            <input type="text" placeholder="Ingrese el genero" name="genero" id="genero" required />
                        </div>

                        <div className={`${Styles['input-box']}`}>
                            <label htmlFor="duracion">Duracion</label>
                            <input type="text" placeholder="Ingrese la duracion" name="duracion" id="duracion" required />
                        </div>

                        <div className={`${Styles['input-box']}`}>
                            <label htmlFor="inventario">Inventario</label>
                            <input type="text" placeholder="Ingrese el inventario" name="inventario" id="inventario" required />
                        </div>

                        <div className={`${Styles['button-container']}`}>
                            <button type="submit">Update</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default UpdateForms;