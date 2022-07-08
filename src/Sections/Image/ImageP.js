import imagen from '../../Assets/Imgs/imagenprincipal.svg';
import imagenMobile from '../../Assets/Imgs/imagenprinc2.png';
import { useContext } from 'react';
import { LanguageContext } from "../../Context/LanguageContext";

export const ImageP = () =>{

    const { data } = useContext(LanguageContext);

    return(
        <div id="home">
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
			<h1 className='text'>{data.image.title}</h1>
			<button className="princ-contact d-block d-sm-block d-md-none"><a href="#contact">{data.navbar.a4}</a></button>
            
        </div>
    )
}