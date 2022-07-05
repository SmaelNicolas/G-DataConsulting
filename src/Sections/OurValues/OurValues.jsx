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
					text={data.values.cards[0]}
				/>
				<CardValues
					iconValue={<FaHandsHelping />}
					text={data.values.cards[1]}
				/>
				<CardValues
					iconValue={<GiExtraTime />}
					text={data.values.cards[2]}
				/>
				<CardValues
					iconValue={<FaPeopleCarry />}
					text={data.values.cards[3]}
				/>
				<CardValues
					iconValue={<AiOutlineFileProtect />}
					text={data.values.cards[4]}
				/>
				<CardValues
					iconValue={<IoIosPeople />}
					text={data.values.cards[5]}
				/>
			</div>
		</div>
	);
};
