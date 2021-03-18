import React from 'react'
import IconCheck from '../../Icons/check'
import './pricing.css'

function Pricing() {

    return(
        <div className="pricing-container">
             <h1>Preços</h1>
            <div className="pricing-content-container">
                <div className="pricing-header">
                    <a>ATÉ 30% DE DESCONTO!</a>
                </div>
                <div className="plans">
                    <h1>Plano Mensal</h1>
                    <a>R$1300</a>
                </div>
                <div className="row">
                    <IconCheck/>
                    <a>Consultoria tributária</a>
                </div>
                <div className="row">
                    <IconCheck/>
                    <a>Acompanhamento processual</a>
                </div>
                <div className="row">
                    <IconCheck/>
                    <a>Atualização semanal</a>
                </div>
                <button className="btn-hire">Quero contratar</button>
                <button className="btn-discount">Quero resgatar desconto</button>
            </div>
        </div>
    )
}

export default Pricing