import React from 'react';
import { Link } from "react-scroll";

import './header.css'


function Header (){


    return (
        <div className='HeadContainer'>
            <h1 href="#">Datajus</h1>
            <nav className='NavMenu'>
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
            </nav>
            <button className="header-btn">Fale Conosco</button>
        </div>
    )
}

export default Header