import React, { useState } from 'react' 
import './../../pages/discount.css'
import image from './../../Icons/desconto4.png'


function DiscountDisplay (props){

    const {desconto} = props
    const [close, setClose] = useState(false)

    function handleClose(){

        setClose(true)
    }

    return(
        
        <div className="display-discount-container">
            {close? 
                <div className="close-container"> 
                    <div className="close-content-container"> 
                        <h1>Tem certeza que deseja fechar?</h1>
                        <p>O seu desconto continuará válido por apenas 5 dias.</p>
                        <div className="close-footer"> 
                            <button className="dicount-btn" style={{backgroundColor:'transparent', color:"#38A3F1", borderColor:"#F5F5F5", border:"2px solid"}}  onClick={() => window.location = ('http://datajus.site/')}>Sim</button>
                            <button  className="dicount-btn"  onClick={() => setClose(false)}>Não</button>
                        </div>
                    </div>
                </div> : <div className="display-discount-content">
                <img alt="confirm-img" src={image}/>
                <h1 style={{fontSize:'24px'}}>Com a Datajus você economiza:</h1>
                <h1><strong>R${desconto}</strong></h1>
                <h2>O desconto é válido por tempo vitalício e resgatável em até <strong>5 dias.</strong></h2>
                <button className="dicount-btn"  onClick={() => window.location = ('http://datajus.site/cadastro')}>Resgatar Desconto!</button>
                <button  className='dicount-btn' style={{backgroundColor:"transparent", color:"#38A3F1", width:"50px"}} onClick={() => handleClose()}>Voltar</button>
            </div> }
            
        </div>
    )
}

export default DiscountDisplay