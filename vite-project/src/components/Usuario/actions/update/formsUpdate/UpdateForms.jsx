import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Styles from './UpdateForms.module.css';
import { UsuariosDataContext } from '../../../UsuariosData';

function UpdateForms() {

    const location = useLocation();
    const idUsuario = location.state ? location.state.idUsuario : null; // Check if location.state is not null before accessing idUsuario

    const { updateUsuario } = useContext(UsuariosDataContext);

    const handleUpdate = (event) => {
        event.preventDefault();
        // Get the updated user data from the form or state
        const updatedNombre = event.target.nombre.value;
        const updatedApPat = event.target.apPat.value;
        const updatedApMat = event.target.apMat.value;
        const updatedPassword = event.target.password.value;
        const updatedEmail = event.target.email.value;
        const updatedSuperUser = event.target.superUser.value;
        const index = Number(idUsuario);
        updateUsuario(index, updatedNombre, updatedApPat, updatedApMat, updatedPassword, updatedEmail, updatedSuperUser);
        alert(`Usuario ${idUsuario} modificado con éxito`);
        event.target.reset();
    }

    return (
        <div className={Styles.div}>
            <section className={Styles.container}>


                <form action="#" onSubmit={handleUpdate}>
                    <h2 className={Styles.h2}>Modificar usuario {idUsuario}</h2>
                    <div className={Styles.content}>
                        <div className={`${Styles['input-box']}`}>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="nombre" placeholder="Ingrese su nombre" name="nombre" id="nombre" required />
                        </div>

                        <div className={`${Styles['input-box']}`}>
                            <label htmlFor="apPat">Apellido Paterno</label>
                            <input type="apellidoPat" placeholder="Ingrese su apellido paterno" name="apPat" id="apPat" required />
                        </div>

                        <div className={`${Styles['input-box']}`}>
                            <label htmlFor="apMat">Apellido Materno</label>
                            <input type="text" placeholder="Ingrese su apellido materno" name="apMat" id="apMat" required />
                        </div>

                        <div className={`${Styles['input-box']}`}>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" placeholder="Ingrese su contraseña" name="password" id="password" required />
                        </div>

                        <div className={`${Styles['input-box']}`}>
                            <label htmlFor="email">Correo electronico</label>
                            <input type="correo" placeholder="Ingrese su correo" name="email" id="email" required />
                        </div>

                        <span className={`${Styles['super-user']}`}>Super user</span>
                        <div className={`${Styles['user-type']}`}>
                            <input type="radio" id="superUserYes" name="superUser" value="1" />
                            <label htmlFor="superUserYes">Si</label>
                            <input type="radio" id="superUserNo" name="superUser" value="0" />
                            <label htmlFor="superUserNo">No</label>

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