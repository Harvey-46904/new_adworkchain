
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contenido from './pages/Contenido';
import Inicio from './pages/Inicio';
import Items from './pages/Items';
import Servicios from './pages/Servicios';
import ThreeScene from './pages/ThreeScene';
import Tjs from './pages/Tjs';
import Model3 from './components/Model3';
import { Sillaverde } from './components/Sillaverde/Sillaverde';
import ModelX from './components/ModelX';
import ScrollServices from './components/ScrollServices';
import VideoServicios from './components/VideoServicios';
import ItemServicios from './components/ItemServicios';
import Nosotros from './pages/Nosotros';
import Incubadoras from './pages/Incubadoras'
import Cryptoversox from './pages/Cryptoversox';
import Academy from './pages/Academy';
import Contactanos from './pages/Contactanos';
import DesarrolloBlockchain from './pages/DesarrolloBlockchain';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/prueba" element={<Tjs />} />
      <Route path="/inicio" element={<Contenido />} />
      <Route path="/item" element={<Items />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/esto" element={<ThreeScene />} />
      <Route path="/obj" element={<Model3 />} />
      <Route path="/final" element={<ModelX />} />
      <Route path="/scroll" element={<ScrollServices />} />
      <Route path="/video" element={<VideoServicios />} />
      <Route path="/item_servicios" element={<ItemServicios />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/incubadoras" element={<Incubadoras />} />
      <Route path="/cryptoversox" element={<Cryptoversox />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="/contactanos" element={<Contactanos />} />
      <Route path="/blockchain" element={<DesarrolloBlockchain />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
