import React from 'react'
import './about.css'
import '../../Icons/icons.css'
import IconInstagram from '../../Icons/instagram'
import IconFacebook from '../../Icons/facebook'
import IconWhatsapp from '../../Icons/whatsapp'

function About () {

    return (
        <div className="about-container" id="about">
            <div className="about-content-container">
                <h1>A primeira <strong>Startup LegalTech</strong> que combina jurimetria com consultoria tributária. </h1>
                <h3>Com mais de 20 anos de experiência em consultoria tributária, nossa equipe desenvolveu uma ferramenta que automatiza o acompanhamento dos processos e que auxilia na tomada de decisão, a fim de aumentar a acertividade e trazendo celeridade processual. </h3>
                <div className="media">
                    <IconWhatsapp color={"#696969"} height={'32px'} width={'32px'} />
                    <IconInstagram color={"#696969"}/>
                    <IconFacebook color={"#696969"}/>
                </div>
            </div>
        </div>
    )
}

export default About