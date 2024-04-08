import React from 'react';
import Styles from './Usuarios.module.css';
import { Link } from 'react-router-dom';


function Usuarios() {

    return (
        <div className={Styles.div}>
            <section className={Styles.container}>
                <h1 className={Styles.h1}> Usuarios</h1>


                <div className={Styles.card}>
                    <h2 className={Styles.h2}>Create</h2>
                    <div className={`${Styles['card-image']} ${Styles['card-1']}`}></div>
                    <Link to="/usuarios/create" className={Styles.Link}>ADMINISTRAR</Link>
                </div>

                <div className={Styles.card}>
                    <h2 className={Styles.h2}>Read</h2>
                    <div className={`${Styles['card-image']} ${Styles['card-2']}`}></div>
                    <Link to="/usuarios/read">ADMINISTRAR</Link>

                </div>

                <div className={Styles.card}>
                    <h2 className={Styles.h2}>Update</h2>
                    <div className={`${Styles['card-image']} ${Styles['card-3']}`}></div>
                    <Link to="/usuarios/update">ADMINISTRAR</Link>

                </div>

                <div className={Styles.card}>
                    <h2 className={Styles.h2}>Delete</h2>
                    <div className={`${Styles['card-image']} ${Styles['card-4']}`}></div>
                    <Link to="/usuarios/delete">ADMINISTRAR</Link>

                </div>
            </section>
        </div>

    );
}

export default Usuarios;