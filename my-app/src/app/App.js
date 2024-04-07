import React from 'react';
import Menu from '../components/menu/Menu';
import Navbar from '../components/navbar/Navbar';
import Usuarios from '../components/Usuario/Usuarios';
import Peliculas from '../components/Pelicula/Peliculas';
import Rentas from '../components/Renta/Rentas';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/rentas" element={<Rentas />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
