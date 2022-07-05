import imagen from '../../Assets/Imgs/imagenprincipal.svg';

export const ImageP = () =>{
    return(
        <div>
            <img
				className='image'
				src={imagen}
				alt='imagenprincipal'
			/>
			<h1 className='text'>Convertimos datos en <br/> información de valor <br/> para tu negocio. </h1>
            
        </div>
    )
}