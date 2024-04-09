// UsuariosData.jsx
import React, { useState, createContext, useEffect } from 'react';

export const UsuariosDataContext = createContext();

export const UsuariosDataProvider = props => {
    const [nombre, setNombre] = useState([]);
    const [apPat, setApPat] = useState([]);
    const [apMat, setApMat] = useState([]);
    const [password, setPassword] = useState([]);
    const [email, setEmail] = useState([]);
    const [superUser, setSuperUser] = useState([]);

    useEffect(() => {
        addUsuario('Gael', 'García', 'Morales', '123', 'gael@gmail.com', true);
    }, []);

    const addUsuario = (newNombre, newApPat, newApMat, newPassword, newEmail, newSuperUser) => {
        setNombre(prevNombre => [...prevNombre, newNombre]);
        setApPat(prevApPat => [...prevApPat, newApPat]);
        setApMat(prevApMat => [...prevApMat, newApMat]);
        setPassword(prevPassword => [...prevPassword, newPassword]);
        setEmail(prevEmail => [...prevEmail, newEmail]);
        setSuperUser(prevSuperUser => [...prevSuperUser, newSuperUser === '1']);
    };


    const deleteUsuario = (index) => {
        setNombre(prevNombre => prevNombre.filter((_, i) => i !== index));
        setApPat(prevApPat => prevApPat.filter((_, i) => i !== index));
        setApMat(prevApMat => prevApMat.filter((_, i) => i !== index));
        setPassword(prevPassword => prevPassword.filter((_, i) => i !== index));
        setEmail(prevEmail => prevEmail.filter((_, i) => i !== index));
        setSuperUser(prevSuperUser => prevSuperUser.filter((_, i) => i !== index));
    };

    const updateUsuario = (index, updatedNombre, updatedApPat, updatedApMat, updatedPassword, updatedEmail, updatedSuperUser) => {
        setNombre(prevNombre => prevNombre.map((n, i) => i === index ? updatedNombre : n));
        setApPat(prevApPat => prevApPat.map((ap, i) => i === index ? updatedApPat : ap));
        setApMat(prevApMat => prevApMat.map((ap, i) => i === index ? updatedApMat : ap));
        setPassword(prevPassword => prevPassword.map((pw, i) => i === index ? updatedPassword : pw));
        setEmail(prevEmail => prevEmail.map((e, i) => i === index ? updatedEmail : e));
        setSuperUser(prevSuperUser => prevSuperUser.map((su, i) => i === index ? updatedSuperUser : su));
    };

    return (
        <UsuariosDataContext.Provider value={{ nombre, apPat, apMat, password, email, superUser, addUsuario, deleteUsuario, updateUsuario }}>
            {props.children}
        </UsuariosDataContext.Provider>
    );
};