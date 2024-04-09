// ReadUsuario.jsx
import React, { useContext } from 'react';
import Styles from './ReadUsuario.module.css';
import { UsuariosDataContext } from '../../UsuariosData';

function ReadUsuario() {
    const { nombre: usuarios, apPat, apMat, password, email, superUser } = useContext(UsuariosDataContext);

    return (
        <div className={Styles.div}>
            <section className={Styles.container}>
                <h1 className={Styles.h1}>User Data</h1>
                <table className={Styles.table}>
                    <thead>
                        <tr className={`${Styles['table_header']}`}>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>ApellidoP</th>
                            <th>ApellidoM</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>SuperUser</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((name, index) => (
                            <tr className={`${Styles['table_row']}`} key={index}>
                                <td className={`${Styles['table_cell']}`}>{index}</td>
                                <td className={`${Styles['table_cell']}`}>{name}</td>
                                <td className={`${Styles['table_cell']}`}>{apPat[index]}</td>
                                <td className={`${Styles['table_cell']}`}>{apMat[index]}</td>
                                <td className={`${Styles['table_cell']}`}>{password[index]}</td>
                                <td className={`${Styles['table_cell']}`}>{email[index]}</td>
                                <td className={`${Styles['table_cell']}`}>{superUser[index] ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default ReadUsuario;