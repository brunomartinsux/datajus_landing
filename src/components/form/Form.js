import { React, useState } from 'react'
import './form.css'
const axios = require('axios')

function Form(){

const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')

const[sent, setSent] = useState(false)
const[formBtnText, setFormText] = useState('Enviar Formulário')


function HandleSubmit() {

    const Input0 = document.getElementsByClassName('profile-input').item(0)
    const Input1 = document.getElementsByClassName('profile-input').item(1)
    const Input2 = document.getElementsByClassName('profile-input').item(2)


    if(name && phone && email){
        setFormText('Enviando...')
        // VERIFICANDO EMAIL COM MAILBOXLAYER.COM
        axios({
            method: 'POST',
            url: `https://apilayer.net/api/check?access_key=2940f4bdc3324af140db028708e890f1&email=${email}`
        }).then(response => {
            
            // VERIFICANDO SE O EMAIL É VALIDO

            if(response.data.format_valid && response.data.smtp_check){
                fetch('https://leads-lake.herokuapp.com/leads/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    complete_name: name,
                    phone_no: phone,
                    email: email,
                    lead_type: "lead-capture-form"
            })
          }).then(response => {
            console.log(response)
              if(response.status === 201) {
                setSent(true);
              }
              
            });
            setName('')
            setPhone('')
            setEmail('')
            } else {
                window.alert('OPS! Email inválido :(')
            }
        })
        
    } else {
        if(name === ''){
            Input0.className = 'profile-input shake-horizontal'
            
        }
        if(phone === ''){
            Input1.className = 'profile-input shake-horizontal'
        }
        if(email === ''){
            Input2.className = 'profile-input shake-horizontal'
        }
        
        setTimeout(function(){
            Input0.className = 'profile-input'
            Input1.className = 'profile-input'
            Input2.className = 'profile-input'
        }, 1000)


    }
    

        
}

    return (
        <div className="form-container">
            <div className="form-content">
                <h1>Reduza as <strong>dívidas tributárias</strong> da sua empresa com a Datajus.</h1>
                <p>Preencha o formulário abaixo e nossos especialistas entrarão em contato para tirar suas dúvidas.</p>
            <label className="name-label">Nome Completo</label>
            <input
                className="profile-input"
                placeholder="     Nome completo"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <label className="phone-label">Telefone</label>
            <input
                className="profile-input"
                placeholder="     (XX) XXXXX-XXXX"
                type="text"
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
            />
            <label className="name-label">Email</label>
            <input
                className="profile-input"
                placeholder="     email@exemplo.com"
                type="text"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            {
                sent? <button className="submit-btn" style={{backgroundColor: '#008F39', cursor:'normal'}}>Enviado com Sucesso!</button>
                :
                <button id='submit-btn' className="submit-btn" onClick={() => HandleSubmit()}>{formBtnText}</button>  
                
            }
            
            </div>
        </div>
    )
}

export default Form