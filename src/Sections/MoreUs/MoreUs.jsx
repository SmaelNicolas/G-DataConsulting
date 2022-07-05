import React, { useContext } from "react";
import "./moreUs.css";
import Img1 from "../../Assets/Imgs/business.svg";
import Img2 from "../../Assets/Imgs/Analysis.svg";
import Rocket from "../../Assets/Gifs/rocket.gif";
import { LanguageContext } from "../../Context/LanguageContext";

export const MoreUs = () => {
	const { data } = useContext(LanguageContext);

	return (
		<div className='sectionContainer'>
			<div className='moreUs--bigTitle--container'>
				<p className='moreUs--bigTitle--Text'>{data.moreUs.title}</p>
				<img className='moreUs--bigTitle--rocket' src={Rocket} alt='' />
			</div>
			<div className='moreUs--content'>
				<div className='moreUs--content--line'>
					<img
						className='moreUs--content--line--img'
						src={Img1}
						alt='powerbi'
					/>
					<div className='moreUs--content--line--text'>
						{data.moreUs.content1}
					</div>
				</div>
				<div className='moreUs--content--line reverseWrap'>
					<div className='moreUs--content--line--text'>
						{data.moreUs.content2}
						<div className='moreUs--content--line--text--divider'></div>
						{data.moreUs.content3}
					</div>

					<img
						className='moreUs--content--line--img'
						src={Img2}
						alt='analytics'
					/>
				</div>
			</div>
		</div>
	);
};
