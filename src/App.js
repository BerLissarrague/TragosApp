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
        <Route exact path="TragosApp" element={<HomePage />} />
        <Route path="TragosApp/Buscar-por-ingrediente" element={<BuscarPorIngrediente />} />
        <Route path="TragosApp/Buscar-tragos" element={<BuscarTragosPage />} />
        <Route path="TragosApp/Trago-detail/:id" element={<TragoDetail />} />
        <Route path="*" element={<Navigate to="/TragosApp" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
