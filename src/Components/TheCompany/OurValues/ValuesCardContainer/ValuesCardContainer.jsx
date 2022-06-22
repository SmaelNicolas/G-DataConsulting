import React from "react";
import { ValueCard } from "./ValueCard/ValueCard";
import "./valueCardContainer.css";

export const ValuesCardContainer = () => {
	return (
		<div className='valuesCardContainer'>
			<ValueCard />
			<ValueCard />
			<ValueCard />
			<ValueCard />
			<ValueCard />
			<ValueCard />
			<ValueCard />
		</div>
	);
};
