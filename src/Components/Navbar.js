import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Galery } from './Galery';


export const NavBar = () => {

    return(
        <>
            <Navbar expand="lg" sticky="top" className='navbar-style'>
            <Container>
                <Navbar.Brand href="#home">G-Data Consulting (logo) </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#aboutus">Nosotros</Nav.Link>
                    <Nav.Link href="#ourwork">Nuestros trabajos</Nav.Link>
                    <Nav.Link href="#services">Servicios</Nav.Link>
                    <Nav.Link href="#contact">Contactanos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <h5>Galeria de trabajos</h5>
            <Galery/>
        </>
    )
}