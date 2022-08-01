import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
import { BiDrink } from "react-icons/bi"

const NavbarComponent = () => {

  return (
    <Navbar className="navbar m-10" bg="dark" expand="sm">
      <Container>
        <NavLink className="navbar-brand" to="TragosApp">
          <BiDrink size="30px" className="ms-1" />
          Tragos
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-item nav-link" to="TragosApp/Buscar-tragos">
              Buscar tragos
            </NavLink>
            <NavLink className="nav-item nav-link" to="TragosApp/Buscar-por-ingrediente">
              Ingredientes
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
