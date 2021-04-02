import React from 'react' 
import './confirmation.css'
import image from './../Icons/emailconfirm.png'


function ConfirmEmail (){

    return(
        <div className="confirm-container">
            <div className="confirm-content-container">
                <img alt="confirm-img" src={image}/>
                <h1>Enviamos um email de confirmação para você!</h1>
                <p>Verifique a caixa de entrada do seu email e siga as instruções ;D</p>
                <button className="precos-btn" onClick={() => window.location = ('http://datajus.site/')}>Página inicial</button>
            </div>
        </div>
    )
}

export default ConfirmEmail