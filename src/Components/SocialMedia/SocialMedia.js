import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';

export const SocialMedia = () => {

    return(
        <div className="links-Fixed">
            {/* Linkedin - Link */}
            <button href="#" target="_blank" id='link-Fixed-logo'> <BsLinkedin/> </button>
            {/* Whatsapp - Link */}
            <button href="#" target="_blank" id='link-Fixed-logo'> <BsWhatsapp/> </button>
        </div>
    )
}