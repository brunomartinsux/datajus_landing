import React from 'react';
import './header.css'

function Header (){


    return (
        <div className='HeadContainer'>
            <h1 href="#">Datajus</h1>
            <nav className='NavMenu'>
                    <h3>Serviços</h3>
                    <h3>Sobre Nós</h3>
                    <h3>Preços</h3>
                    <h3>FAQ</h3>
            </nav>
            <button className="header-btn">Fale Conosco</button>
        </div>
    )
}

export default Header