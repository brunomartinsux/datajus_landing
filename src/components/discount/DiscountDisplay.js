import React from 'react' 
import './../../pages/discount.css'
import image from './../../Icons/desconto4.png'


function DiscountDisplay (props){

    const {desconto} = props

    return(
        <div className="display-discount-container">
            <div className="display-discount-content">
                <img alt="confirm-img" src={image}/>
                <h1 style={{fontSize:'24px'}}>Com a Datajus você economiza:</h1>
                <h1><strong>R${desconto}</strong></h1>
                <h2>O desconto é válido por tempo vitalício e resgatável em até <strong>5 dias.</strong></h2>
                <button className="dicount-btn"  onClick={() => window.location = ('http://datajus.site/cadastro')}>Resgatar Desconto!</button>
                <button  className='dicount-btn' style={{backgroundColor:"transparent", color:"#38A3F1"}} onClick={() => window.location = ('http://datajus.site/')}>Página inicial</button>
            </div>
        </div>
    )
}

export default DiscountDisplay