import React from 'react';
import Styles from './Rentas.module.css';
import { Link } from 'react-router-dom';


function Rentas() {

    return (
        <div className={Styles.div}>
            <section className={Styles.container}>
                <h1 className={Styles.h1}> Rentas</h1>


                <div className={Styles.card}>
                    <h2 className={Styles.h2}>Create</h2>
                    <div className={`${Styles['card-image']} ${Styles['card-1']}`}></div>
                    <Link to="/rentas/create" className={Styles.Link}>ADMINISTRAR</Link>
                </div>

                <div className={Styles.card}>
                    <h2 className={Styles.h2}>Read</h2>
                    <div className={`${Styles['card-image']} ${Styles['card-2']}`}></div>
                    <Link to="/rentas/read">ADMINISTRAR</Link>

                </div>

                <div className={Styles.card}>
                    <h2 className={Styles.h2}>Update</h2>
                    <div className={`${Styles['card-image']} ${Styles['card-3']}`}></div>
                    <Link to="/rentas/update">ADMINISTRAR</Link>

                </div>

            </section>
        </div>

    );
}

export default Rentas;