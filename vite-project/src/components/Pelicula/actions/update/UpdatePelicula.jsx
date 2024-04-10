import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './UpdatePelicula.module.css';

function UpdatePelicula() {
    const [idPelicula, setIdPelicula] = React.useState('');
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        navigate("/peliculas/update/edit", { state: { idPelicula: idPelicula } });
    }

    const handleChange = (event) => {
        setIdPelicula(event.target.value);
    }

    return (
        <div className={Styles.div}>
            <section className={Styles.container}>
                <form action="#" onSubmit={handleUpdate}>
                    <h2 className={Styles.h2}>Update pelicula</h2>
                    <div className={Styles.content}>
                        <div className={`${Styles['input-box']}`}>
                            <label htmlFor="idPelicula" className={Styles.id}>ID</label>
                            <input type="text" placeholder="Ingrese ID a modificar" name="idPelicula" id="idPelicula" required onChange={handleChange} />
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

export default UpdatePelicula;