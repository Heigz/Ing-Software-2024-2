import React, { useContext } from 'react';
import Styles from './DeletePelicula.module.css';
import { PeliculasDataContext } from '../../PeliculasData';

function DeletePelicula() {
    const { deletePelicula } = useContext(PeliculasDataContext);

    const handleDelete = (event) => {
        event.preventDefault(); // Prevent the form from being submitted
        const idPelicula = Number(event.target.elements.idPelicula.value); // Get idPelicula from the form
        deletePelicula(idPelicula);
        alert(`Pelicula ${idPelicula} eliminada con éxito`);
        event.target.reset(); // Reset the form
    }
    return (
        <div className={Styles.div}>
            <section className={Styles.container}>
                <form action="" onSubmit={handleDelete}>
                    <h2 className={Styles.h2}>Eliminar pelicula</h2>
                    <div className={Styles.content}>
                        <div className={`${Styles['input-box']}`}>
                            <label htmlFor="idPelicula" className={Styles.id}>ID</label>
                            <input type="text" placeholder="Ingrese ID a borrar" name="idPelicula" id="idPelicula" required />
                        </div>

                        <div className={`${Styles['button-container']}`}>
                            <button type="submit">Eliminar</button>
                        </div>
                    </div>

                </form>

            </section>
        </div>
    );
}

export default DeletePelicula;