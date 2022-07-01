import React from "react";
import "./cardValues.css";

export const CardValues = ({ text }) => {
	return (
		<div className='cardValues'>
			<p className='cardValues--text'>{text}</p>
		</div>
	);
};
