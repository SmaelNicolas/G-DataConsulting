import React, { useContext } from "react";
import { CardServices } from "../../Components/CardServices/CardServices";
import { Title } from "../../Components/Title/Title";
import Bi from "../../Assets/Imgs/bi.svg";
import Cap from "../../Assets/Imgs/capc.svg";
import Supp from "../../Assets/Imgs/supp.svg";

import "./ourServices.css";
import { LanguageContext } from "../../Context/LanguageContext";

export const OurServices = () => {
	const { data } = useContext(LanguageContext);
	return (
		<div className='sectionContainer' id='ourServices'>
			<Title text={data.ourServices.title} />
			<div className='ourServices--cardContainer'>
				<CardServices title={data.ourServices.cards.title1} img={Bi} />
				<CardServices title={data.ourServices.cards.title2} img={Cap} />
				<CardServices
					title={data.ourServices.cards.title3}
					img={Supp}
				/>
			</div>
			<p className='ourServices--text'>{data.ourServices.content}</p>
		</div>
	);
};
