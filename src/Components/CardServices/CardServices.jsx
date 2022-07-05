import React from "react";
import "./cardServices.css";

export const CardServices = ({ title, img }) => {
	return (
		<div className='cardService'>
			<h4 className='cardService--title'>{title}</h4>
			<img className='cardService--img' src={img} alt='icon card' />
		</div>
	);
};
