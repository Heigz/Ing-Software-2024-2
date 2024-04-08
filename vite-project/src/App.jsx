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
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/create" element={<CreateUsuario />} />
        <Route path="/usuarios/read" element={<ReadUsuario />} />
        <Route path="/usuarios/update" element={<UpdateUsuario />} />
        <Route path="/usuarios/delete" element={<DeleteUsuario />} />

        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/peliculas/create" element={<CreatePelicula />} />
        <Route path="/peliculas/read" element={<ReadPelicula />} />
        <Route path="/peliculas/update" element={<UpdatePelicula />} />
        <Route path="/peliculas/delete" element={<DeletePelicula />} />

        <Route path="/rentas" element={<Rentas />} />
        <Route path="/rentas/create" element={<CreateRenta />} />
        <Route path="/rentas/read" element={<ReadRenta />} />
        <Route path="/rentas/update" element={<UpdateRenta />} />
      </Routes>
    </Router>
  );
}

export default App;