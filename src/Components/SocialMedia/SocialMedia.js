import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';

export const SocialMedia = () => {

    return(
        <div className="links-Fixed">
            {/* Linkedin - Link */}
            <a href="https://www.linkedin.com/in/gilligm/" target="_blank" id='link-Fixed-logo'> <BsLinkedin/> </a>
            {/* Whatsapp - Link */}
            <a href="https://walink.co/89fddb" target="_blank" id='link-Fixed-logo'><BsWhatsapp/></a>
        </div>
    )
}