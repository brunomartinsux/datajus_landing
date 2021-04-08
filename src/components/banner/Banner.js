import React from 'react'
import Particles from 'react-particles-js'; 
import './banner.css'
import { Link } from 'react-scroll'

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
                <h1 className="banner-title text-focus-in">Consultoria tributária na <strong>Datajus</strong> é levada a sério!</h1>
                <h3 className="banner-subtitle text-focus-in">Consultores especializados somados a inteligência artificial e atendimento personalizado.</h3>
                <div className="banner-footer">
                <Link
                        activeClass="active"
                        to="form-container"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                           
                       
                    <button className="saiba-mais-btn">
                    Saiba Mais 
                    </button>
                    </Link>
                        <Link
                            activeClass="active"
                            to="pricing-container"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            >
                    <button className="precos-btn">Ver preços</button>
                        </Link>
                   
                </div>
            </div>
        </div>
    )
}

export default Banner