// UpdateUsuario.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './UpdateUsuario.module.css';

function UpdateUsuario() {
    const [idUsuario, setIdUsuario] = useState('');
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        navigate("/usuarios/update/edit", { state: { idUsuario: idUsuario } });
    }

    const handleChange = (event) => {
        setIdUsuario(event.target.value);
    }

    return (
        <div className={Styles.div}>
            <section className={Styles.container}>
                <form action="#" onSubmit={handleUpdate}>
                    <h2 className={Styles.h2}>Update usuario</h2>
                    <div className={Styles.content}>
                        <div className={`${Styles['input-box']}`}>
                            <label htmlFor="idUsuario" className={Styles.id}>ID</label>
                            <input type="text" placeholder="Ingrese ID a modificar" name="idUsuario" id="idUsuario" required onChange={handleChange} />
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

export default UpdateUsuario;