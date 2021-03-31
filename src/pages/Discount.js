import React from 'react'
import './discount.css'

function Discount(){

    return(
        <div className="discount-container">
            <div className="discount-content-container">
                <h1 className="discount-title">GANHE ATÉ <strong>30% DE DESCONTO</strong> NAS SUAS MENSALIDADES.</h1>
                <p>Informe seu CNPJ abaixo para calcularmos seu desconto:</p>
                <label>CNPJ</label>
                <input className="profile-input" placeholder="XX.XXX.XXX/0001-XX" />
                <button className="dicount-btn" onClick={() => {}}>Resgatar Desconto</button>
            </div>
        </div>
    )
}

export default Discount