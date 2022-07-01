import React from "react";
import { CardServices } from "../../Components/CardServices/CardServices";
import { Title } from "../../Components/Title/Title";

import "./ourServices.css";

export const OurServices = () => {
	return (
		<div className='sectionContainer darkBlue' id='ourServices'>
			<Title text={"nuestros servicios"} />
			<div className='cardsContainer'>
				<CardServices />
				<CardServices />
				<CardServices />
			</div>
			<p className='ourServices--text'>
				Nuestros clientes podrán ver sus datos traducidos en información
				en tiempo real, para facilitar el seguimiento de los principales
				indicadores del negocio y la toma de decisiones. El proceso es
				profesional y metodológico para garantizar el cumplimiento
				dentro de los plazos establecidos y presupuestados. Además,
				ofrecemos servicio de mantenimiento, soporte y capacitación de
				uso de herramientas de BI, dando la posibilidad de auto gestión
				a nuestros clientes.
			</p>
		</div>
	);
};
