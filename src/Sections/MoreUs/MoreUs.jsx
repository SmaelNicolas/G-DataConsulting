import React from "react";
import "./moreUs.css";
import Img1 from "../../Assets/Imgs/business.svg";
import Img2 from "../../Assets/Imgs/Analysis.svg";

export const MoreUs = () => {
	return (
		<div className='sectionContainer darkBlue'>
			<div className='moreUs--bigTitle--container'>
				<p className='moreUs--bigTitle--Text'>
					Libera todo el potencial de tus datos, empuja tu empresa al
					siguiente nivel
				</p>
				<div className='moreUs--bigTitle--box'></div>
			</div>
			<div className='moreUs--content'>
				<div className='moreUs--content--line'>
					<img
						className='moreUs--content--line--img'
						src={Img1}
						alt='powerbi'
					/>
					<div className='moreUs--content--line--text'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nisi, elementum sed ac aenean morbi elementum. Sit nisl
						felis, turpis turpis. Neque eget pellentesque at eu
						tempor. Orci non aenean vel amet vitae elit proin non.
					</div>
				</div>
				<div className='moreUs--content--line'>
					<div className='moreUs--content--line--text'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nisi, elementum sed ac aenean morbi elementum. Sit nisl
						felis, turpis turpis. Neque eget pellentesque at eu
						tempor. Orci non aenean vel amet vitae elit proin non.
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
