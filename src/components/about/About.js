import React from 'react'
import './about.css'
import IconActivity from '../../Icons/activity'
import IconCheck from '../../Icons/check-square'
import IconUsers from '../../Icons/users'

function About () {

    return (
        <div className="about-container" id="about">
            <div className="about-content-container">
                <h1>A primeira <strong>Startup LegalTech</strong> que combina jurimetria com consultoria tributária. </h1>
                <h3>Com mais de 20 anos de experiência em consultoria tributária, nossa equipe desenvolveu uma ferramenta que automatiza o acompanhamento dos processos e que auxilia na tomada de decisão, afim de aumentar a acertividade e trazendo celeridade processual. </h3>
                <div className="media">
                    <IconActivity/>
                    <IconCheck />
                    <IconUsers />
                </div>
            </div>
        </div>
    )
}

export default About