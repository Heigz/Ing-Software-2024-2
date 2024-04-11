// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Usuarios from './components/Usuario/Usuarios';
import Peliculas from './components/Pelicula/Peliculas';
import Rentas from './components/Renta/Rentas';
import Menu from './components/menu/Menu';
import CreateUsuario from './components/Usuario/actions/create/CreateUsuario';
import ReadUsuario from './components/Usuario/actions/read/ReadUsuario';
import UpdateUsuario from './components/Usuario/actions/update/UpdateUsuario';
import DeleteUsuario from './components/Usuario/actions/delete/DeleteUsuario';
import CreatePelicula from './components/Pelicula/actions/create/CreatePelicula';
import ReadPelicula from './components/Pelicula/actions/read/ReadPelicula';
import UpdatePelicula from './components/Pelicula/actions/update/UpdatePelicula';
import DeletePelicula from './components/Pelicula/actions/delete/DeletePelicula';
import CreateRenta from './components/Renta/actions/create/CreateRenta';
import ReadRenta from './components/Renta/actions/read/ReadRenta';
import UpdateRenta from './components/Renta/actions/update/UpdateRenta';
import UpdateForms from './components/Usuario/actions/update/formsUpdate/UpdateForms';
import UpdateFormsPelicula from './components/Pelicula/actions/update/formsUpdate/UpdateForms';
import UpdateFormsRenta from './components/Renta/actions/update/formsUpdate/UpdateForms';
import { UsuariosDataProvider } from './components/Usuario/UsuariosData';
import { PeliculasDataProvider } from './components/Pelicula/PeliculasData';
import { RentasDataProvider } from './components/Renta/RentasData';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/usuarios" element={
          <UsuariosDataProvider >
            <Usuarios />
          </UsuariosDataProvider>
        } />
        <Route path="/usuarios/create" element={
          <UsuariosDataProvider>
            <CreateUsuario />
          </UsuariosDataProvider>
        } />
        <Route path="/usuarios/read" element={
          <UsuariosDataProvider>
            <ReadUsuario />
          </UsuariosDataProvider>
        } />
        <Route path="/usuarios/update" element={
          <UsuariosDataProvider>
            <UpdateUsuario />
          </UsuariosDataProvider>
        } />
        <Route path="/usuarios/update/edit" element={
          <UsuariosDataProvider>
            <UpdateForms />
          </UsuariosDataProvider>
        } />
        <Route path="/usuarios/delete" element={
          <UsuariosDataProvider>
            <DeleteUsuario />
          </UsuariosDataProvider>
        } />
        // =====================================Peliculas=====================================
        <Route path="/peliculas" element={
          <PeliculasDataProvider>
            <Peliculas />
          </PeliculasDataProvider>
        } />
        <Route path="/peliculas/create" element={
          <PeliculasDataProvider>
            <CreatePelicula />
          </PeliculasDataProvider>
        } />
        <Route path="/peliculas/read" element={
          <PeliculasDataProvider>
            <ReadPelicula />
          </PeliculasDataProvider>
        } />
        <Route path="/peliculas/update" element={
          <PeliculasDataProvider>
            <UpdatePelicula />
          </PeliculasDataProvider>
        } />
        <Route path="/peliculas/update/edit" element={
          <PeliculasDataProvider>
            <UpdateFormsPelicula />
          </PeliculasDataProvider>
        } />
        <Route path="/peliculas/delete" element={
          <PeliculasDataProvider>
            <DeletePelicula />
          </PeliculasDataProvider>
        } />



        // =====================================Rentas=====================================
        <Route path="/rentas" element={
          <RentasDataProvider>
            <Rentas />
          </RentasDataProvider>
        }
        />
        <Route path="/rentas/create" element={
          <RentasDataProvider>
            <CreateRenta />
          </RentasDataProvider>
        } />
        <Route path="/rentas/read" element={
          <RentasDataProvider>
            <ReadRenta />
          </RentasDataProvider>
        } />
        <Route path="/rentas/update" element={
          <RentasDataProvider>
            <UpdateRenta />
          </RentasDataProvider>
        } />
        <Route path="/rentas/update/edit" element={
          <RentasDataProvider>
            <UpdateFormsRenta />
          </RentasDataProvider>
        } />
      </Routes>
    </Router>
  );
}

export default App;