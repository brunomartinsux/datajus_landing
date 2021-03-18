import React from 'react'
import Particles from 'react-particles-js'; 
import './banner.css'

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
                    value: 30, 
                    density: { 
                        enable: true, 
                        value_area: 500, 
                    } 
                    }, 
                }, 
                }} 
            /> 
            </div>
            <div className="banner-container">
                <h1 className="banner-title">Lorem ipsum dolor sit amet, consectetur adipiscing. </h1>
                <h3 className="banner-subtitle">Consultores especializados somados a inteligência artificial e atendimento personalizado.</h3>
                <div className="banner-footer">
                    <button className="saiba-mais-btn">Saiba Mais</button>
                    <button className="precos-btn">Ver preços</button>
                </div>
            </div>
        </div>
    )
}

export default Banner