import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../navbar/Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.main}> {/* Use div instead of body for JSX */}
            <nav className={styles.nav}>
                <NavLink to="/" className={styles.siteTitle}>Clonbuster</NavLink>
                <ul className={styles.nav}> {/* Use className={styles.nav} for the ul element */}
                    <li className={styles.li}>
                        <NavLink
                            to="usuarios"
                        >
                            Usuarios
                        </NavLink>
                    </li >
                    <li className={styles.li}>
                        <NavLink
                            to="peliculas"
                        >
                            Peliculas
                        </NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink
                            to="rentas"
                        >
                            Rentas
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
