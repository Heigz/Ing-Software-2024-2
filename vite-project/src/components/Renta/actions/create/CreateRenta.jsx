import React, { useContext } from "react";
import Styles from "./CreateRenta.module.css";
import { RentasDataContext } from "../../RentasData";

function CreateRenta() {

    const { addRenta } = useContext(RentasDataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const idUsuario = e.target.idUsuario.value;
        const idPelicula = e.target.idPelicula.value;
        const fechaRenta = e.target.fechaRenta.value;
        const diasRenta = e.target.diasRenta.value;
        const estatus = e.target.estatus.value;

        addRenta(idUsuario, idPelicula, fechaRenta, diasRenta, estatus);
        alert(`Renta creada con éxito`);
        e.target.reset();
    }

    return (
        <div className={Styles.div}>
            <div className={Styles.div}>
                <section className={Styles.container}>
                    <form action="#" onSubmit={handleSubmit}>
                        <h2 className={Styles.h2}>Crear renta</h2>
                        <div className={Styles.content}>
                            <div className={`${Styles['input-box']}`}>
                                <label htmlFor="idUsuario">ID usuario</label>
                                <input type="text" placeholder="Ingrese su nombre" name="idUsuario" id="idUsuario" required />
                            </div>

                            <div className={`${Styles['input-box']}`}>
                                <label htmlFor="idPelicula">ID pelicula</label>
                                <input type="text" placeholder="Ingrese el genero" name="idPelicula" id="idPelicula" required />
                            </div>

                            <div className={`${Styles['input-box']}`}>
                                <label htmlFor="fechaRenta">Fecha de renta</label>
                                <input type="date" placeholder="Ingrese la duracion(min)" name="fechaRenta" id="fechaRenta" required />
                            </div>

                            <div className={`${Styles['input-box']}`}>
                                <label htmlFor="diasRenta">Dias de renta</label>
                                <input type="text" placeholder="Ingrese el numero de inventario" name="diasRenta" id="diasRenta" required />
                            </div>

                            <span className={`${Styles['super-user']}`}>Estatus</span>
                            <div className={`${Styles['user-type']}`}>
                                <input type="radio" id="Entregada" name="estatus" value="1" />
                                <label htmlFor="Entregada">Entregada</label>
                                <input type="radio" id="NoEntregada" name="estatus" value="0" />
                                <label htmlFor="NoEntregada">No entregada</label>

                            </div>


                            <div className={`${Styles['button-container']}`}>
                                <button type="submit">Crear</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default CreateRenta;