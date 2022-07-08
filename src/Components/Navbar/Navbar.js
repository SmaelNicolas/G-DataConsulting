import {Container, Nav, Navbar } from 'react-bootstrap';
import { useState, useContext } from 'react';
import logo from '../../Assets/Imgs/logotransparente.png';
import { LanguageContext } from "../../Context/LanguageContext";
import 'animate.css';


export const NavBar = () => {

    const { data } = useContext(LanguageContext);

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
        <div className='navbar-config'>
            <Navbar expand="sm" fixed="top" className={colorChange ? 'navbar colorChange' : 'navbar'}>
            <Container>
                <Navbar.Brand href="#home">
                    <img 
                        className='navbar-logo'
                        src={logo}
                        alt='logo'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-control navbar-dark' />
                <Navbar.Collapse id="basic-navbar-nav" className='animate__animated animate__fadeInRight'>
                    <Nav className="me-auto">
                        <a href="#aboutUs">{data.navbar.a1}</a>
                        <a href="#work">{data.navbar.a2}</a>
                        <a href="#ourServices">{data.navbar.a3}</a>
                        <button className="navbar-contact" id="navbar-contact"><a href="#contact">{data.navbar.a4}</a></button>

                        {/* Para seleccionar idioma */}
                        {/* <form className='flag'>
                            <select size="sm" className='flag-select'>
                                <option value="es" selected>ES</option>
                                <option value="en">EN</option>
                            </select>
                        </form> */}
                    </Nav>
                </Navbar.Collapse>
                        <div className='borde'></div>
            </Container>
            
            </Navbar>

        </div>
    )
}