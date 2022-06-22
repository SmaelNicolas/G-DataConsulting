import React from "react";
import { Title } from "../../Title/Title";
import "./ourValues.css";
import { ValuesCardContainer } from "./ValuesCardContainer/ValuesCardContainer";

export const OurValues = () => {
	return (
		<div>
			<Title text={"Nuestros valores"} />
			<ValuesCardContainer />
		</div>
	);
};
