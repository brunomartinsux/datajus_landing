import React, { useState } from 'react'

const axios = require('axios')

function DiscountForm(props) {

    const {setIsVerified, setDiscount} = props

    const [cnpj,setCnpj] = useState('')

    function handleSubmit(){
        axios({
            method: 'post',
            url: 'https://leads-lake.herokuapp.com/solds/',
            data: {
                document:cnpj
            }
          }).then(response =>{
              console.log(response.data.valordesconto)
              if(response.status === 201){
                setDiscount(response.data.valordesconto)                
                  setIsVerified(true)
              }
          })
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