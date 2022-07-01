import React from "react";
import "./ourValues.css";
import { CardValues } from "../../Components/CardValues/CardValues";
import { Title } from "../../Components/Title/Title";

export const OurValues = () => {
	return (
		<div className='sectionContainer darkBlue' id='ourValues'>
			<Title text={"nuestros valores"} />
			<div className='ourValues--card--container'>
				<CardValues text='Foco en el cliente' />
				<CardValues text='Compromiso' />
				<CardValues text='Responsabilidad' />
				<CardValues text='Vocación de servicio' />
				<CardValues text='Empatía' />
				<CardValues text='Profesionalismo' />
				<CardValues text='Trabajo en equipo' />
				<CardValues text='Pro actividad' />
			</div>
		</div>
	);
};
