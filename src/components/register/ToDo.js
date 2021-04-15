import React from 'react'
import IconNote from '../../Icons/note'
import IconPencil from '../../Icons/pencil'
import IconPlane from '../../Icons/paperplane'
import IconSearch from '../../Icons/search'

function ToDo(){

    return(
        <div className='todo-container'>
            <div className='todo-content-container scale-up-center'>
                <div className='todo-item'>
                    <IconPencil/>
                    <div className='todo-item-content'>
                        <h1>PASSO 1</h1>
                        <p>Recebemos seu cadastro, preenchido no formulário ao lado.</p>
                    </div>
                </div>
                <div className='todo-item'>
                    <IconSearch/>
                    <div className='todo-item-content'>
                        <h1>PASSO 2</h1>
                        <p>Validamos seu CNPJ e encaminhamos à um atendente.</p>
                    </div>
                </div>
                <div className='todo-item'>
                    <IconPlane />
                    <div className='todo-item-content'>
                        <h1>PASSO 3</h1>
                        <p>Enviamos um email com +info passos e docs </p>
                    </div>
                </div>
                <div className='todo-item'>
                    <IconNote/>
                    <div className='todo-item-content'>
                        <h1>PASSO 4</h1>
                        <p>Basta finalizar o pagamento e já será um cliente <strong style={{fontFamily:'Yellowtail', fontWeight:'300', fontSize:'19px'}}>Datajus</strong>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDo