import  Navbarr  from "./Components/NavBar/Navbar";
import CardTrago from "./Components/CardTrago";
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
  <BrowserRouter>
  <Navbarr />
  <CardTrago />  
  </BrowserRouter>
  );
}

export default App;
