import React, { useState } from 'react'

const axios = require('axios')

function DiscountForm(props) {

    const {setIsVerified, setDiscount} = props

    const [cnpj,setCnpj] = useState('')

    async function handleSubmit(){

        if(cnpj) {
            const consultaLead = await axios({
                method: 'get',
                url: `https://leads-lake.herokuapp.com/leads/${cnpj}`
            })
            //Verifica se CNPJ é lead
            if(consultaLead.data !== null){
                const leadId = consultaLead.data.id
                const desconto = await axios({
                    method: 'get',
                    url: `https://leads-lake.herokuapp.com/solds/${leadId}`
                });
            //Verificar se já possui desconto cadastrado
            if(desconto.data !== null){
                setDiscount(desconto.data.sold)
                setIsVerified(true)
            } else {
                const cadastroDesconto = await axios({
                    method: 'post',
                    url: `https://leads-lake.herokuapp.com/solds/${leadId}`
                })
                setDiscount(cadastroDesconto.data['valor desconto'])
                setIsVerified(true)
            }
    
            //CASO O LEAD NAO SEJA CADASTRADO, DEVE CRIAR
            } else {
                const novoLead = await axios({
                    method: 'post',
                    url: `https://leads-lake.herokuapp.com/leads/`,
                    data: {
                        'document':cnpj,
                        'lead_type': 'ld-desconto'
                    }
                })
                console.log(novoLead.status)
            //RECEBE ID DO LEAD PARA CADASTRO
                const novoLeadId = await axios({
                    method: 'get',
                    url: `https://leads-lake.herokuapp.com/leads/${cnpj}`
                })
                
            //CADASTRAR DESCONTO NO NOVO LEAD
            const novoLeadDesconto = await axios({
                    method: 'post',
                    url: `https://leads-lake.herokuapp.com/solds/${novoLeadId.data.id}`
                })
            //ATRIBUIR DESCONTO AS VARIAVEIS E CONFIRMAR A MUDANÇA DE PÁGINA
                if(novoLeadDesconto.data !== null){
                    setDiscount(novoLeadDesconto.data['valor desconto'])
                    setIsVerified(true)
            }   
            }
        } else {
            window.alert('Preencher o CNPJ corretamente.')
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
                data-mask="00.000.000/0000-00"
                required
                value={cnpj}
                onChange={(event) => setCnpj(event.target.value)}/>
                <button  className="dicount-btn" onClick={() => handleSubmit()}>Resgatar Desconto</button>
            </div>
        </div>
    )
}

export default DiscountForm