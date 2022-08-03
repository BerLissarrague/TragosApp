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
        <Route exact path="tragos-app" element={<HomePage />} />
        <Route path="tragos-app/buscar-por-ingrediente" element={<BuscarPorIngrediente />} />
        <Route path="tragos-app/buscar-tragos" element={<BuscarTragosPage />} />
        <Route path="tragos-app/trago-detail/:id" element={<TragoDetail />} />
        <Route path="*" element={<Navigate to="tragos-app" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
