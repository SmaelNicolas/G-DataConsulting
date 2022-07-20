import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import logo from "../../Assets/Imgs/logotransparente.png";
import "animate.css";

export const NavBar = () => {
	const [colorChange, setColorchange] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 650) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	window.addEventListener("scroll", changeNavbarColor);

	return (
		<div className='navbar-config'>
			<Navbar
				expand='sm'
				fixed='top'
				className={colorChange ? "navbar colorChange" : "navbar"}
			>
				<Container>
					<Navbar.Brand href='#home'>
						<img className='navbar-logo' src={logo} alt='logo' />
					</Navbar.Brand>
					<Navbar.Toggle
						aria-controls='basic-navbar-nav'
						className='navbar-control navbar-dark'
					/>
					<Navbar.Collapse
						id='basic-navbar-nav'
						className='animate__animated animate__fadeInRight'
					>
						<Nav className='me-auto'>
							<a href='#aboutUs'>nosotros</a>
							<a href='#work'>nuestros trabajos</a>
							<a href='#ourServices'>servicios</a>
							<button
								className='navbar-contact'
								id='navbar-contact'
							>
								<a href='#contact'>contáctanos</a>
							</button>
						</Nav>
					</Navbar.Collapse>
					<div className='borde'></div>
				</Container>
			</Navbar>
		</div>
	);
};
