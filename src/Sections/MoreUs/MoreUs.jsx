import React from "react";
import "./moreUs.css";
import Img1 from "../../Assets/Imgs/business.svg";
import Img2 from "../../Assets/Imgs/Analysis.svg";
import Rocket from "../../Assets/Gifs/rocket.gif";

export const MoreUs = () => {
	return (
		<div className='sectionContainer'>
			<div className='moreUs--bigTitle--container'>
				<p className='moreUs--bigTitle--Text'>
					Libera todo el potencial de tus datos, empuja tu empresa al
					siguiente nivel
				</p>
				<img className='moreUs--bigTitle--rocket' src={Rocket} alt='' />
			</div>
			<div className='moreUs--content'>
				<div className='moreUs--content--line'>
					<img
						className='moreUs--content--line--img firstBr'
						src={Img1}
						alt='powerbi'
					/>
					<div className='moreUs--content--line--text secondBr'>
						¿Te animás a convertir los datos en oportunidades?
					</div>
				</div>
				<div className='moreUs--content--line reverseWrap'>
					<div className='moreUs--content--line--text thirdBr'>
						Detectando oportunidades en tu negocio podes crear un
						ventaja competitiva
						<div className='moreUs--content--line--text--divider'></div>
						Tomá las decisiones correctas, en el momento preciso.
					</div>

					<img
						className='moreUs--content--line--img fourthBr'
						src={Img2}
						alt='analytics'
					/>
				</div>
			</div>
		</div>
	);
};
