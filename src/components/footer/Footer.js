import React from 'react'
import IconUsers from '../../Icons/users'
import './footer.css'
import { Link } from 'react-scroll'

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
                <IconUsers />
                <IconUsers />
                <IconUsers />
            </div>
        </div>
    )       
}

export default Footer