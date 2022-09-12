
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contenido from './pages/Contenido';
import Inicio from './pages/Inicio';
import Items from './pages/Items';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/inicio" element={<Contenido />} />
      <Route path="/item" element={<Items />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
