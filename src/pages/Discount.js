import React, { useState } from 'react'
import DiscountDisplay from '../components/discount/DiscountDisplay'
import DiscountForm from '../components/discount/DiscountForm'
import './discount.css'

function Discount(){

    const [isVerified, setIsVerified] = useState(false)
    const [discount,setDiscount] = useState('0')


    return(
        <div>
            {isVerified?    
            <DiscountDisplay desconto={discount}/> 
            : 
            <DiscountForm setDiscount={setDiscount} setIsVerified={setIsVerified}/>
            }
            
        </div>
    )
}

export default Discount