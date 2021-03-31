import React from 'react'
import IconCheck from '../../Icons/check'
import './pricing.css'

import { Link } from 'react-router-dom'

function Pricing() {

    return(
        <div className="pricing-container" id="pricing">
             <h1>Preços</h1>
            <div className="pricing-content-container">
                <div className="pricing-header">
                    <p>ATÉ 30% DE DESCONTO!</p>
                </div>
                <div className="plans">
                    <h1>Plano Mensal</h1>
                    <p>R$1300</p>
                </div>
                <div className="separate"/>
                <div className="row">
                    <IconCheck/>
                    <p>Consultoria tributária</p>
                </div>
                <div className="row">
                    <IconCheck/>
                    <p>Acompanhamento processual</p>
                </div>
                <div className="row">
                    <IconCheck/>
                    <p>Atualização semanal</p>
                </div>
                <button className="btn-hire">Quero contratar</button>
                <button className="btn-discount"><Link to="/desconto" style={{ color: 'inherit', textDecoration: 'inherit'}}>Quero resgatar desconto</Link></button>
            </div>
        </div>
    )
}

export default Pricing