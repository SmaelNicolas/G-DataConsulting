import React from "react";
import "./cardServices.css";

export const CardServices = ({ title, img }) => {
	return (
		<div className='cardService'>
			<h4 className='cardService--title'>{title}</h4>
			<img className='cardService--img' src={img} alt='icon card' />
			{/* <div className='cardService--text'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Distinctio blanditiis perspiciatis laborum ipsa ad ducimus
				consectetur quis id commodi, quaerat vel quam sint ex nulla.
			</div> */}
		</div>
	);
};
