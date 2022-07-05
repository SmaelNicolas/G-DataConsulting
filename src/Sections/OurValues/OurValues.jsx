import React, { useContext } from "react";
import "./ourValues.css";
import { CardValues } from "../../Components/CardValues/CardValues";
import { Title } from "../../Components/Title/Title";
import { LanguageContext } from "../../Context/LanguageContext";
import { MdCenterFocusWeak } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { GiExtraTime } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

export const OurValues = () => {
	const { data } = useContext(LanguageContext);
	return (
		<div className='sectionContainer darkBlue' id='ourValues'>
			<Title text={data.values.title} />
			<div className='ourValues--card--container'>
				<CardValues
					iconValue={<MdCenterFocusWeak />}
					text='Foco en el cliente'
				/>
				<CardValues iconValue={<FaHandsHelping />} text='Compromiso' />
				<CardValues
					iconValue={<GiExtraTime />}
					text='Responsabilidad'
				/>
				<CardValues iconValue={<FaPeopleCarry />} text='Empatía' />
				<CardValues
					iconValue={<AiOutlineFileProtect />}
					text='Profesionalismo'
				/>
				<CardValues
					iconValue={<IoIosPeople />}
					text='Trabajo en equipo'
				/>
			</div>
		</div>
	);
};
