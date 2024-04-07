import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu() {
    return (
        <div className={styles.div}>
            <section className={styles.container}>

                <div className={styles.card}>
                    <h2 className={styles.h2}>Usuarios</h2>
                    <div className={`${styles['card-image']} ${styles['card-1']}`}></div>
                    <Link to="usuarios" className={styles.Link}>ADMINISTRAR</Link>
                </div>

                <div className={styles.card}>
                    <h2 className={styles.h2}>Peliculas</h2>
                    <div className={`${styles['card-image']} ${styles['card-2']}`}></div>
                    <Link to="peliculas" className={styles.Link}>ADMINISTRAR</Link>

                </div>

                <div className={styles.card}>
                    <h2 className={styles.h2}>Rentas</h2>
                    <div className={`${styles['card-image']} ${styles['card-3']}`}></div>

                    <Link to="rentas" className={styles.Link}>ADMINISTRAR</Link>

                </div>

            </section>

        </div>

    );
}

export default Menu;
