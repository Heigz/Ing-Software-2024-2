import React from 'react';
import Styles from './Peliculas.module.css';
import { Link } from 'react-router-dom';


function Peliculas() {

    return (
        <div className={Styles.div}>
            <section className={Styles.container}>
                <h1 className={Styles.h1}> Peliculas</h1>


                <div className={Styles.card}>
                    <h2 className={Styles.h2}>Create</h2>
                    <div className={`${Styles['card-image']} ${Styles['card-1']}`}></div>
                    <Link to="/peliculas/create" className={Styles.Link}>ADMINISTRAR</Link>
                </div>

                <div className={Styles.card}>
                    <h2 className={Styles.h2}>Read</h2>
                    <div className={`${Styles['card-image']} ${Styles['card-2']}`}></div>
                    <Link to="/peliculas/read">ADMINISTRAR</Link>

                </div>

                <div className={Styles.card}>
                    <h2 className={Styles.h2}>Update</h2>
                    <div className={`${Styles['card-image']} ${Styles['card-3']}`}></div>
                    <Link to="/peliculas/update">ADMINISTRAR</Link>

                </div>

                <div className={Styles.card}>
                    <h2 className={Styles.h2}>Delete</h2>
                    <div className={`${Styles['card-image']} ${Styles['card-4']}`}></div>
                    <Link to="/peliculas/delete">ADMINISTRAR</Link>

                </div>
            </section>
        </div>

    );
}

export default Peliculas;