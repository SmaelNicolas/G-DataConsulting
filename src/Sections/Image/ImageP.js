import imagen from '../../Assets/Imgs/imagenprincipal.svg';
import { useContext } from 'react';
import { LanguageContext } from "../../Context/LanguageContext";

export const ImageP = () =>{

    const { data } = useContext(LanguageContext);

    return(
        <div>
            <img
				className='image'
				src={imagen}
				alt='imagenprincipal'
			/>
			<h1 className='text'>{data.image.title}</h1>
            
        </div>
    )
}