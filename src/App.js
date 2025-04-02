import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/topbar.js';
import Home from './components/home.js';
import SobreNosotros from './components/aus.js';
import Cretacico from './components/periodos/cretacico/cretacico.js';
import Jurasico from './components/periodos/jurasico/jurasico.js';
import Trasico from './components/periodos/triasico/triasico.js';
import DinosaurDetail from './components/dinosaurios/DinosaurDetail.js'; // Nuevo componente para todos los dinosaurios

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/periodo-triasico" element={<Trasico />} />
        <Route path="/periodo-jurasico" element={<Jurasico />} />
        <Route path="/periodo-cretacico" element={<Cretacico />} />
        <Route path="/dinosaurio/:name" element={<DinosaurDetail />} /> {/* Ruta dinámica */}
      </Routes>
    </Router>
  );
};

export default App;
