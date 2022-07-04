import imagen from '../../Assets/Imgs/imagenprincipal.png';
import logo from '../../Assets/Imgs/logotransparente.png';

export const ImageP = () =>{
    return(
        <div>
            <img
				className='image'
				src={imagen}
				alt='imagenprincipal'
			/>
            <img
				className='image-logo'
				src={logo}
				alt='logo'
			/>
        </div>
    )
}