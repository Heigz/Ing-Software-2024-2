import React from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './UpdateRenta.module.css';

function UpdateRenta() {

    const [idRenta, setIdRenta] = React.useState('');
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        navigate("/rentas/update/edit", { state: { idRenta: idRenta } });
    }

    const handleChange = (event) => {
        setIdRenta(event.target.value);
    }
    return (
        <div className={Styles.div}>
            <section className={Styles.container}>
                <form action="#" onSubmit={handleUpdate}>
                    <h2 className={Styles.h2}>Update renta</h2>
                    <div className={Styles.content}>
                        <div className={`${Styles['input-box']}`}>
                            <label htmlFor="idRenta" className={Styles.id}>ID</label>
                            <input type="text" placeholder="Ingrese ID a modificar" name="idRenta" id="idRenta" required onChange={handleChange} />
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

export default UpdateRenta;