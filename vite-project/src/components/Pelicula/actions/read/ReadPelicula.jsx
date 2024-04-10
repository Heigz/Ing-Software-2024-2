import React, { useContext } from "react";
import Styles from "./ReadPelicula.module.css";
import { PeliculasDataContext } from "../../PeliculasData";

function ReadPelicula() {
    const { nombre: peliculas, genero, duracion, inventario } = useContext(PeliculasDataContext);
    return (
        <div className={Styles.div}>
            <section className={Styles.container}>
                <h1 className={Styles.h1}>User Data</h1>
                <table className={Styles.table}>
                    <thead>
                        <tr className={`${Styles['table_header']}`}>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Genero</th>
                            <th>Duracion</th>
                            <th>Inventario</th>

                        </tr>
                    </thead>
                    <tbody>
                        {peliculas.map((name, index) => (
                            <tr className={`${Styles['table_row']}`} key={index}>
                                <td className={`${Styles['table_cell']}`}>{index}</td>
                                <td className={`${Styles['table_cell']}`}>{name}</td>
                                <td className={`${Styles['table_cell']}`}>{genero[index]}</td>
                                <td className={`${Styles['table_cell']}`}>{duracion[index]}</td>
                                <td className={`${Styles['table_cell']}`}>{inventario[index]}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default ReadPelicula;