// CreatePelicula.jsx
import React, { useContext } from 'react';
import Styles from './CreatePelicula.module.css';
import { PeliculasDataContext } from '../../PeliculasData';

function CreatePelicula() {
    const { addPelicula } = useContext(PeliculasDataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const genero = e.target.genero.value;
        const duracion = e.target.duracion.value;
        const inventario = e.target.inventario.value;

        addPelicula(nombre, genero, duracion, inventario);
        alert(`Pelicula ${nombre} creada con éxito`);
        e.target.reset();
    }

    return (
        <div className={Styles.div}>
            <div className={Styles.div}>
                <section className={Styles.container}>
                    <form action="#" onSubmit={handleSubmit}>
                        <h2 className={Styles.h2}>Crear pelicula</h2>
                        <div className={Styles.content}>
                            <div className={`${Styles['input-box']}`}>
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" placeholder="Ingrese su nombre" name="nombre" id="nombre" required />
                            </div>

                            <div className={`${Styles['input-box']}`}>
                                <label htmlFor="genero">Genero</label>
                                <input type="text" placeholder="Ingrese el genero" name="genero" id="genero" required />
                            </div>

                            <div className={`${Styles['input-box']}`}>
                                <label htmlFor="duracion">Duracion</label>
                                <input type="text" placeholder="Ingrese la duracion(min)" name="duracion" id="duracion" required />
                            </div>

                            <div className={`${Styles['input-box']}`}>
                                <label htmlFor="inventario">Inventario</label>
                                <input type="text" placeholder="Ingrese el numero de inventario" name="inventario" id="inventario" required />
                            </div>

                            <div className={`${Styles['button-container']}`}>
                                <button type="submit">Crear</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default CreatePelicula;