import React from "react";
import { CardServices } from "../../Components/CardServices/CardServices";
import { Title } from "../../Components/Title/Title";
import Bi from "../../Assets/Imgs/bi.svg";
import Cap from "../../Assets/Imgs/capc.svg";
import Supp from "../../Assets/Imgs/supp.svg";

import "./ourServices.css";

export const OurServices = () => {
	return (
		<div className='sectionContainer' id='ourServices'>
			<Title text='nuestros servicios' />
			<div className='ourServices--cardContainer'>
				<CardServices title='desarrollo bi' img={Bi} />
				<CardServices title='capacitación' img={Cap} />
				<CardServices title='soporte y mantenimiento' img={Supp} />
			</div>
			<div className='ourServices--text--container'>
				<div className='ourServices--text'>
					Nuestros clientes podrán ver sus datos traducidos en
					información en tiempo real, para facilitar el seguimiento de
					los principales indicadores del negocio y la toma de
					decisiones.
					<div className='ourServices--text--divider'></div>
					El proceso es profesional y metodológico para garantizar el
					cumplimiento dentro de los plazos establecidos y
					presupuestados.
					<div className='ourServices--text--divider'></div>
					Además, ofrecemos servicio de mantenimiento, soporte y
					capacitación de uso de herramientas de BI, dando la
					posibilidad de auto gestión a nuestros clientes.
				</div>
			</div>
		</div>
	);
};
