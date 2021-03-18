import React from 'react';
import './header.css'
import whatsapp from '../../Icons/Vector.png'

function Header (){


    return (
        <div className='HeadContainer'>
            <h1 href="#">Datajus</h1>
            <nav className='NavMenu'>
                    <a href="#">Serviços</a>
                    <a href="#">Sobre Nós</a>
                    <a href="#">Preços</a>
                    <a href="#">FAQ</a>
            </nav>
            <button><img src={whatsapp} alt="wppicon"/>Fale Conosco</button>
        </div>
    )
}

export default Header