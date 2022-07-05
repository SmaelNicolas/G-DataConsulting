import React, { useContext } from "react";
import { Title } from "../../Components/Title/Title";
import { LanguageContext } from "../../Context/LanguageContext";

import "./aboutUs.css";

export const AboutUs = () => {
	const { data } = useContext(LanguageContext);

	return (
		<div className='sectionContainer' id='aboutUs'>
			<Title text={data.us.title} />
			<div className='aboutUs--textContainer'>{data.us.content}</div>
		</div>
	);
};
