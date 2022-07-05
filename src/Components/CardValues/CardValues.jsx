import React from "react";
import "./cardValues.css";

export const CardValues = ({ iconValue, text }) => {
	return (
		<div className='cardValues'>
			<div className='carValues--icon'>{iconValue}</div>
			<p className='cardValues--text'>{text}</p>
		</div>
	);
};
