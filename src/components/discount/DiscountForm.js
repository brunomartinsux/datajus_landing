import React, { useState } from 'react'

function DiscountForm(props) {

    const {setIsVerified} = props

    const [cnpj,setCnpj] = useState('')

    function handleSubmit(){
        if(cnpj) {
                    setIsVerified(true)
              
                    
        } else {
            window.alert('Preencha o CNPJ corretamente.')
        }
    }

    return(
        <div className="discount-container">
            <div className="discount-content-container">
                <h1 className="discount-title">GANHE ATÉ <strong>30% DE DESCONTO</strong> NAS SUAS MENSALIDADES.</h1>
                <p>Informe seu CNPJ abaixo para calcularmos seu desconto:</p>
                <label>CNPJ</label>
                <input className="profile-input" placeholder="XX.XXX.XXX/0001-XX"
                type="text"
                required
                value={cnpj}
                onChange={(event) => setCnpj(event.target.value)}/>
                <button className="dicount-btn" onClick={() => handleSubmit()}>Resgatar Desconto</button>
            </div>
        </div>
    )
}

export default DiscountForm