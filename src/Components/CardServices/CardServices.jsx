import React from "react";
import "./cardServices.css";

export const CardServices = () => {
	return (
		<div className='cardService'>
			<h4 className='cardService--title'>Titulo</h4>
			<img
				className='cardService--img'
				src='https://www.svgrepo.com/show/73694/question-mark.svg'
				alt='?'
			/>
			<div className='cardService--text'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Distinctio blanditiis perspiciatis laborum ipsa ad ducimus
				consectetur quis id commodi, quaerat vel quam sint ex nulla.
			</div>
		</div>
	);
};
