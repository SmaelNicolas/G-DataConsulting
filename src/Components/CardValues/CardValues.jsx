import React from "react";
import "./cardValues.css";

export const CardValues = ({ first, last, iconValue, text }) => {
	return (
		<div
			className={
				first
					? "cardValues first"
					: last
					? "cardValues last"
					: "cardValues"
			}
		>
			<div className='carValues--icon'>{iconValue}</div>
			<p className='cardValues--text'>{text}</p>
		</div>
	);
};
