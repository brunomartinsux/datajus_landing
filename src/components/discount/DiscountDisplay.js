import React from 'react' 
import './../../pages/confirmation.css'
import image from './../../Icons/desconto4.png'


function DiscountDisplay (props){

    const {desconto} = props

    return(
        <div className="confirm-container">
            <div className="confirm-content-container">
                <img alt="confirm-img" src={image}/>
                <h1 style={{fontSize:'24px'}}>Com a Datajus você economiza:</h1>
                <h1><strong>R${desconto}</strong></h1>
                <h2>O desconto é válido por tempo vitalício e resgatável em até <strong>5 dias.</strong></h2>
                <button className="precos-btn" onClick={() => window.location = ('http://localhost:3000/')}>Página inicial</button>
            </div>
        </div>
    )
}

export default DiscountDisplay