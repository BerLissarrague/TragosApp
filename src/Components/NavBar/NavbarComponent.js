import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
import { BiDrink } from "react-icons/bi"

const NavbarComponent = () => {
  return (
    <Navbar className="navbarr m-10" bg="dark" expand="sm">
      <Container>
        <NavLink className="navbar-brand" to="/">
          <BiDrink size="30px" className="ms-1"/>
          Tragos
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-item nav-link" to="/">
              Trago del dia
            </NavLink>
            {/* Mejorar esta ruta */}
            <NavLink className="nav-item nav-link" to="/"> 
              Buscar tragos
            </NavLink>
            {/* Mejorar esta ruta */}
            <NavLink className="nav-item nav-link" to="/"> 
              Ingredientes
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
