import React from 'react'
import Particles from 'react-particles-js'; 
import './banner.css'
import Scroll from 'react-scroll'


function handleClick(num){

    Scroll.animateScroll.scrollTo(num)
}

function Banner () {

    return (
        <div style={{ position: 'relative', overflow: "hidden" }}>
            <div style={{position: 'absolute', zindex:-10}}>
            <Particles
                 height="200vh" 
                 width="200vw"
                params={{     
                particles: { 
                    number: { 
                    value: 10, 
                    density: { 
                        enable: true, 
                        value_area: 300, 
                    } 
                    }, 
                }, 
                }} 
            /> 
            </div>
            <div className="banner-container">
                <h1 className="banner-title">Consultoria tributária na <strong>Datajus</strong> é levada a sério!</h1>
                <h3 className="banner-subtitle">Consultores especializados somados a inteligência artificial e atendimento personalizado.</h3>
                <div className="banner-footer">
                    <button className="saiba-mais-btn" onClick={() => handleClick(3000)}>Saiba Mais</button>
                    <button className="precos-btn" onClick={() => handleClick(1850)}>Ver preços</button>
                </div>
            </div>
        </div>
    )
}

export default Banner