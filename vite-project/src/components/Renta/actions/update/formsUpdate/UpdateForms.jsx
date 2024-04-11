import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Styles from './Updateforms.module.css';
import { RentasDataContext } from '../../../RentasData';

function UpdateForms() {

    const location = useLocation();
    const idRenta = location.state ? location.state.idRenta : null; // Check if location.state is not null before accessing idRenta

    const { updateRenta } = useContext(RentasDataContext);

    const handleUpdate = (event) => {
        event.preventDefault();
        // Get the updated user data from the form or state
        const estatus = event.target.estatus.value;

        const index = Number(idRenta);
        updateRenta(index, estatus);
        alert(`Renta ${idRenta} modificado con éxito`);
        event.target.reset();
    }

    return (
        <div className={Styles.div}>
            <section className={Styles.container}>


                <form action="#" onSubmit={handleUpdate}>
                    <h2 className={Styles.h2}>Modificar renta {idRenta}</h2>
                    <div className={Styles.content}>


                        <span className={`${Styles['super-user']}`}>Estatus</span>
                        <div className={`${Styles['user-type']}`}>
                            <input type="radio" id="Entregada" name="estatus" value="1" />
                            <label htmlFor="Entregada">Entregada</label>
                            <input type="radio" id="NoEntregada" name="estatus" value="0" />
                            <label htmlFor="NoEntregada">No entregada</label>

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

export default UpdateForms;