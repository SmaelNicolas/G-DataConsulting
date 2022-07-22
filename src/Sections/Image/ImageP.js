import imagen from "../../Assets/Imgs/imagenprincipal.svg";
import imagenMobile from "../../Assets/Imgs/imagenprinc2.png";
import Logo from "../../Assets/Imgs/logotsp.png";

export const ImageP = () => {
	return (
		<div id='home'>
			<img className='newLogo' src={Logo} alt='g data consulting' />
			<img
				className='image d-none d-sm-none d-md-block'
				src={imagen}
				alt='imagenprincipal'
			/>
			<img
				className='image d-block d-sm-block d-md-none'
				src={imagenMobile}
				alt='imagenprincipal'
			/>
			<h1 className='text'>
				Convertimos datos en información de valor para tu negocio
			</h1>
			<button className='princ-contact d-block d-sm-block d-md-none'>
				<a href='#contact'>contáctanos</a>
			</button>
		</div>
	);
};
