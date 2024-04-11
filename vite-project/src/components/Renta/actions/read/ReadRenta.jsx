import React, { useContext } from 'react';
import Styles from './ReadRenta.module.css';
import { RentasDataContext } from '../../RentasData';

function ReadRenta() {
    const { idUsuario, idPelicula, fechaRenta, diasRenta, estatus } = useContext(RentasDataContext);
    return (
        <div className={Styles.div}>
            <section className={Styles.container}>
                <h1 className={Styles.h1}>User Data</h1>
                <table className={Styles.table}>
                    <thead>
                        <tr className={`${Styles['table_header']}`}>
                            <th>ID renta</th>
                            <th>ID usuario  </th>
                            <th>ID pelicula </th>
                            <th>Fecha renta </th>
                            <th>Dias</th>
                            <th>Estatus</th>

                        </tr>
                    </thead>
                    <tbody>
                        {idUsuario.map((n, index) => (
                            <tr className={`${Styles['table_row']}`} key={index}>
                                <td className={`${Styles['table_cell']}`}>{index}</td>
                                <td className={`${Styles['table_cell']}`}>{idUsuario[index]}</td>
                                <td className={`${Styles['table_cell']}`}>{idPelicula[index]}</td>
                                <td className={`${Styles['table_cell']}`}>{fechaRenta[index]}</td>
                                <td className={`${Styles['table_cell']}`}>{diasRenta[index]}</td>
                                <td className={`${Styles['table_cell']}`}>{estatus[index]}</td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );

}

export default ReadRenta;