import NavbarComponent from "./Components/NavBar/NavbarComponent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BuscarTragosPage from "./Pages/BuscarTragosPage";
import HomePage from "./Pages/HomePage";
import BuscarPorIngrediente from "./Pages/BuscarPorIngrediente";
import './App.css';
import TragoDetail from "./Pages/TragosDetail";


function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="buscar-por-ingrediente" element={<BuscarPorIngrediente />} />
        <Route path="buscar-tragos" element={<BuscarTragosPage />} />
        <Route path="trago-detail/:id" element={<TragoDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
