import React from 'react'
import './footer.css'
import { Link } from 'react-scroll'
import IconWhatsapp from '../../Icons/whatsapp'
import IconInstagram from '../../Icons/instagram'
import IconFacebook from '../../Icons/facebook'

function Footer() {

    return (
        <div className="footer-section">
            <div className="footer-menu">
            <Link
                activeClass="active"
                to="prd-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Serviços</Link>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Quem somos</Link>
            <Link
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Preços</Link>
            <Link
                activeClass="active"
                to="faq"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >FAQ</Link>
            </div>
            <div className="media-footer">
                <IconWhatsapp color={"#ffffff"} height={'32px'} width={'32px'} />
                <IconInstagram color={"#ffffff"}/>
                <IconFacebook color={"#ffffff"}/>
            </div>
        </div>
    )       
}

export default Footer