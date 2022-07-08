import { useState } from 'react';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';

export const SocialMedia = () => {

    const [show, setShow] = useState(false);
    const showLinks = () =>{
        if(window.scrollY >= 600){
            setShow(false);
        }
        else{
            setShow(true);
        }
    };
    window.addEventListener('scroll', showLinks);

    return(
        <div className={show ? 'links-hide' : 'links-Fixed'}>
            {/* Linkedin - Link */}
            <a href="https://www.linkedin.com/in/gilligm/" target="_blank" id='link-Fixed-logo'> <BsLinkedin/> </a>
            {/* Whatsapp - Link */}
            <a href="https://walink.co/89fddb" target="_blank" id='link-Fixed-logo'><BsWhatsapp/></a>
        </div>
    )
}