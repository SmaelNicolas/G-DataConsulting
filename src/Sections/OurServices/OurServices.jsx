import React from "react";
import { CardServices } from "../../Components/CardServices/CardServices";
import { Title } from "../../Components/Title/Title";

import "./ourServices.css";

export const OurServices = () => {
	return (
		<div className='sectionContainer' id='ourServices'>
			<Title text={"nuestros servicios"} />
			<div className='cardsContainer'>
				<CardServices />
				<CardServices />
				<CardServices />
			</div>
		</div>
	);
};
