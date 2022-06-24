import {Container, Nav, Navbar } from 'react-bootstrap';


export const NavBar = () => {

    return(
        <>
            <Navbar expand="lg" sticky="top" className='navbar-style'>
            <Container>
                <Navbar.Brand href="#home">G-Data Consulting (logo) </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#aboutUs">Nosotros</Nav.Link>
                    <Nav.Link href="#work">Nuestros trabajos</Nav.Link>
                    <Nav.Link href="#ourServices">Servicios</Nav.Link>
                    <Nav.Link href="#contact">Contactanos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </>
    )
}