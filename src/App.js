import NavbarComponent from "./Components/NavBar/NavbarComponent";
import CardTrago from "./Components/CardTrago";
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <CardTrago />  
    </BrowserRouter>
  );
}

export default App;
