import { React, useState } from 'react';
import './header.css'

//Menu functions package
import { Link } from "react-scroll";
import IconMenu from '../../Icons/hamburguer';
import NavMenu from './NavMenu';
import IconWhatsapp from '../../Icons/whatsapp';



function Header (){


    const [menu, setMenu] = useState(false)

    return (
        <div className='HeadContainer' >
            <h1>Datajus</h1 >
            <div className='NavMenu' id="nav-menu">
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
            <button className="header-btn" onClick={() => window.open('https://api.whatsapp.com/send?phone=5547997086040&text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Datajus.%20Gostaria%20de%20saber%20mais%20sobre%20o%20Servi%C3%A7o!')}
            >   <IconWhatsapp color={"#f2f2f2"} height={"20px"} width={'20px'}/>
                 Fale Conosco
            </button>
            <div className="Hamburguer">
            <IconMenu menu={menu} setMenu={setMenu}/>
            </div>
            { menu? <NavMenu menu={menu} setMenu={setMenu}/> : null }
        </div>
    )
}

export default Header