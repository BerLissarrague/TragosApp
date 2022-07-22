import NavbarComponent from "./Components/NavBar/NavbarComponent";
import CardTrago from "./Components/CardTrago";
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />

      {/* aqui rutas */}
      {/* ruta para home: "/" */}
      {/* ruta para buscar tragos: "/buscar-trago" */}
      {/* ruta para ingredientes: "/buscar-por-ingrediente" */}

      {/* buscar trago va a ir adentro de home */}
      <CardTrago />  
    </BrowserRouter>
  );
}

export default App;
