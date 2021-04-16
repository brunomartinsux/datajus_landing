import { React } from 'react';
import './header.css'
import '../about/about.css'

//Menu functions package
import { Link } from "react-scroll";
import IconClose from '../../Icons/close'



function NavMenu (props){

    const {menu, setMenu} = props

    return (
        <div className='NavBarMenu scale-in-ver-top'  >
            <div className='Nav' id="nav-menu">
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
            <IconClose menu={menu} setMenu={setMenu}/>
            </div>
            
        </div>
        
    )
}

export default NavMenu