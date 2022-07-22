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
        <NavLink className="navbar-brand" to="/"><span><BiDrink className="ml-2"/></span>
          Tragos
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-item nav-link" to="tragos-del-dia">
              Trago del dia
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
