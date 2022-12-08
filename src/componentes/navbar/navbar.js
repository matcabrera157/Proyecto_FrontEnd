import React from "react";
import "./navbar.css";
import {Nav, Navbar, Container} from 'react-bootstrap'; 
import Icon from './mercadoGamer.jpg';

const Menu = () => {

return (
  <Navbar className="navbar" bg="light" expand="lg">
    <Container>
      <span>
      <Navbar.Brand href="/"> 
      <img src={Icon} alt="Icono principal" style={{width:'40%'}}></img>
      </Navbar.Brand>
      </span>
      <div>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
      <span className="moverBuscador">
      <input className="buscador" type="text" placeholder="Busca un producto..."></input>
      </span>
        <Nav className="me-auto">
          <Nav.Link className="color" href="/">Inicio</Nav.Link>
          <Nav.Link className="color" href="/contact">Contacto</Nav.Link>
          <Nav.Link className="color" href="/aboutUs">Nosotros</Nav.Link>
          <Nav.Link className="color" href="/register"> Iniciar Sesión </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Container>
  </Navbar>
)
}

export default Menu;

