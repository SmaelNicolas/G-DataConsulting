import React from "react";
import { Title } from "../../Components/Title/Title";

import "./aboutUs.css";

export const AboutUs = () => {
	return (
		<div className='sectionContainer' id='aboutUs'>
			<Title text='¿quiénes somos?' />
			<div className='aboutUs--textContainer'>
				<div className='aboutUs--textContainer--text'>
					Somos un equipo apasionado por los datos, y ofrecemos un
					servicio profesional de desarrollo de BI para empresas.
					Nuestro objetivo es mostrar a las empresas información de
					valor a cualquier nivel para dar visibilidad, seguimiento y
					apoyo en la toma de decisiones.
				</div>
			</div>
		</div>
	);
};
