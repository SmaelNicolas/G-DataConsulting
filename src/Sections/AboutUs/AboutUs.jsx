import React from "react";
import { Title } from "../../Components/Title/Title";

import "./aboutUs.css";

export const AboutUs = () => {
	return (
		<div className='sectionContainer darkBlue' id='aboutUs'>
			<Title text={"¿QUIÉNES SOMOS?"} />
			<div className='aboutUs--textContainer'>
				Somos un equipo apasionado por los datos y le ofrecemos un
				servicio profesional de desarrollo de BI a empresas. Deseamos
				mostrar y dar la posibilidad a todos los usuarios de conocer el
				potencial de las herramientas que nos brindan las tecnologías de
				la información
			</div>
		</div>
	);
};
