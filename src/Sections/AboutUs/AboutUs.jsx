import React from "react";
import { Title } from "../../Components/Title/Title";

import "./aboutUs.css";

export const AboutUs = () => {
	return (
		<div className='sectionContainer'>
			<Title text={"¿Quienes Somos?"} />
			<div className='aboutUs--textContainer'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
				cum, debitis libero facilis quam eveniet illo magni dolorum
				eaque, repellat aut. Accusantium incidunt minima officia ut
				reprehenderit atque necessitatibus ratione repudiandae voluptas
				commodi minus illum repellat consequatur sit nam beatae harum
				libero, perspiciatis possimus, vitae natus consectetur
				asperiores optio voluptatum!
			</div>
		</div>
	);
};
