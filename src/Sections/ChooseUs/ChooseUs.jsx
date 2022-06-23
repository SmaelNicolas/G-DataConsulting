import React from "react";
import { CardChooseUs } from "../../Components/CardChooseUs/CardChooseUs";
import { Title } from "../../Components/Title/Title";

import "./chooseUs.css";

export const ChooseUs = () => {
	return (
		<div className='sectionContainer' id='ourClients'>
			<Title text={"quienes nos eligen"} />
			<div className='cardsContainer'>
				<CardChooseUs img='https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/151/posts/33040/image/chanel-logo.jpg' />
				<CardChooseUs img='https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logo_famoso_starbucks.jpg?width=650&name=logo_famoso_starbucks.jpg' />
				<CardChooseUs img='https://www.cocacolaespana.es/content/dam/one/es/es/lead/logo-coca-cola-1.jpg' />
				<CardChooseUs img='https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Apple.jpg' />
				<CardChooseUs img='https://www.camaracivica.com/wp-content/uploads/2017/09/maxresdefault-1024x576.jpg' />
			</div>
		</div>
	);
};
