import {Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import logo from '../../Assets/Imgs/logotransparente.png';


export const NavBar = () => {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
     if(window.scrollY >= 650){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return(
        <>
            <Navbar expand="lg" fixed="top" className={colorChange ? 'navbar colorChange' : 'navbar'}>
            <Container>
                <Navbar.Brand href="#home">
                    <img 
                        className='navbar-logo'
                        src={logo}
                        alt='logo'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <a href="#aboutUs">Nosotros</a>
                        <a href="#work">Nuestros <br/> trabajos</a>
                        <a href="#ourServices">Servicios</a>
                        <button className="navbar-contact"><a href="#contact">Contactanos</a></button>
                    </Nav>
                        <div className='borde'></div>
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </>
    )
}