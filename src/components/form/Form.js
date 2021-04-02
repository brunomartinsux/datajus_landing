import { React, useState } from 'react'
import './form.css'


function Form(){

const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')

const[sent, setSent] = useState(false)


function HandleSubmit() {

    if(name && phone && email){
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
        window.alert('Preencha todos os campos do formulário corretamente.')
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
                <button className="submit-btn" onClick={() => HandleSubmit()}>Enviar Formulário</button>  
                
            }
            
            </div>
        </div>
    )
}

export default Form