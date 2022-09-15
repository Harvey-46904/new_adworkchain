
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contenido from './pages/Contenido';
import Inicio from './pages/Inicio';
import Items from './pages/Items';
import Servicios from './pages/Servicios';
import Tjs from './pages/Tjs';
import Model3 from './components/Model3';
import { Sillaverde } from './components/Sillaverde/Sillaverde';
import ModelX from './components/ModelX';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/prueba" element={<Tjs />} />
      <Route path="/inicio" element={<Contenido />} />
      <Route path="/item" element={<Items />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/obj" element={<Model3 />} />
      <Route path="/final" element={<ModelX />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
