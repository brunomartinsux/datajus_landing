import React from 'react'
import IconCheck from '../../Icons/check'
import './pricing.css'

function Pricing() {

    return(
        <div className="pricing-container">
             <h1>Preços</h1>
            <div className="pricing-content-container">
                <div className="pricing-header">
                    <h3>ATÉ 30% DE DESCONTO!</h3>
                </div>
                <div className="plans">
                    <h1>Plano Mensal</h1>
                    <h3>R$1300</h3>
                </div>
                <div className="row">
                    <IconCheck/>
                    <h3>Consultoria tributária</h3>
                </div>
                <div className="row">
                    <IconCheck/>
                    <h3>Acompanhamento processual</h3>
                </div>
                <div className="row">
                    <IconCheck/>
                    <h3>Atualização semanal</h3>
                </div>
                <button className="btn-hire">Quero contratar</button>
                <button className="btn-discount">Quero resgatar desconto</button>
            </div>
        </div>
    )
}

export default Pricing