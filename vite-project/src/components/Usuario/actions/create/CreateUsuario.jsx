import React, { useContext } from 'react';
import Styles from './CreateUsuario.module.css';
import { UsuariosDataContext } from '../../UsuariosData';

function CreateUsuario() {


    const { addUsuario } = useContext(UsuariosDataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const apPat = e.target.apPat.value;
        const apMat = e.target.apMat.value;
        const password = e.target.password.value;
        const email = e.target.email.value;
        const superUser = e.target.superUser.value;

        addUsuario(nombre, apPat, apMat, password, email, superUser);
        alert(`Usuario ${nombre} creado con éxito`);
        e.target.reset();
    }

    return (
        <div className={Styles.div}>
            <section className={Styles.container}>


                <form action="#" onSubmit={handleSubmit}>
                    <h2 className={Styles.h2}>Crear usuario</h2>
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
                            <button type="submit">Crear</button>
                        </div>
                    </div>

                </form>
            </section>
        </div>
    );
}

export default CreateUsuario;