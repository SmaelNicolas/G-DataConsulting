import React, { useContext } from "react";
import "./ourValues.css";
import { CardValues } from "../../Components/CardValues/CardValues";
import { Title } from "../../Components/Title/Title";
import { LanguageContext } from "../../Context/LanguageContext";

export const OurValues = () => {
	const { data } = useContext(LanguageContext);
	return (
		<div className='sectionContainer darkBlue' id='ourValues'>
			<Title text={data.values.title} />
			<div className='ourValues--card--container'>
				{data.values.cards.map((item) => (
					<CardValues text={item} />
				))}
			</div>
		</div>
	);
};
