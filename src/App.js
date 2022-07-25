import NavbarComponent from "./Components/NavBar/NavbarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuscarTragosPage from "./Pages/BuscarTragosPage"
import HomePage from "./Pages/HomePage";
import BuscarPorIngrediente from "./Pages/BuscarPorIngrediente"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="buscar-x-ingrediente" element={<BuscarPorIngrediente />} />
        <Route path="buscar-tragos" element={<BuscarTragosPage />} />
        <Route path="Trago-del-dia" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
