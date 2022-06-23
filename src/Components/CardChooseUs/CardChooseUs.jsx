import React from "react";
import "./cardChooseUs.css";

export const CardChooseUs = ({ img }) => {
	return (
		<div className='cardChooseUs'>
			<img className='cardChooseUs--image' src={img} alt='img' />
		</div>
	);
};
