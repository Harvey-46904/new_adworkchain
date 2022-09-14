
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contenido from './pages/Contenido';
import Inicio from './pages/Inicio';
import Items from './pages/Items';
import Servicios from './pages/Servicios';
import ThreeScene from './pages/ThreeScene';
import Tjs from './pages/Tjs';

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
    </Routes>
  </BrowserRouter>
  );
}

export default App;
