import React from "react";
import "./ourValues.css";
import { CardValues } from "../../Components/CardValues/CardValues";
import { Title } from "../../Components/Title/Title";

export const OurValues = () => {
	return (
		<div className='sectionContainer' id='ourValues'>
			<Title text={"nuestros valores"} />
			<div className='cardsContainer'>
				<CardValues text='	Lorem ipsum.' />
				<CardValues text='	Lorem ipsum.' />
				<CardValues text='	Lorem ipsum.' />
				<CardValues text='	Lorem ipsum.' />
				<CardValues text='	Lorem ipsum.' />
			</div>
		</div>
	);
};
