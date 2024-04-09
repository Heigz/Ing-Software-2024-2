import React, { useContext } from 'react';
import Styles from './DeleteUsuario.module.css';
import { UsuariosDataContext } from '../../UsuariosData';

function DeleteUsuario() {

    const { deleteUsuario } = useContext(UsuariosDataContext);

    const handleDelete = (event) => {
        event.preventDefault(); // Prevent the form from being submitted
        const idUsuario = Number(event.target.elements.idUsuario.value); // Get idUsuario from the form
        deleteUsuario(idUsuario);
        alert(`Usuario ${idUsuario} eliminado con éxito`);
        event.target.reset(); // Reset the form
    }

    return (
        <div className={Styles.div}>
            <section className={Styles.container}>
                <form action="" onSubmit={handleDelete}>
                    <h2 className={Styles.h2}>Eliminar usuario</h2>
                    <div className={Styles.content}>
                        <div className={`${Styles['input-box']}`}>
                            <label htmlFor="idUsuario" className={Styles.id}>ID</label>
                            <input type="text" placeholder="Ingrese ID a borrar" name="idUsuario" id="idUsuario" required />
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

export default DeleteUsuario;