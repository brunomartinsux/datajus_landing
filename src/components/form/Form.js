import { React, useState } from 'react'
import './form.css'


function Form(){

const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')


function HandleSubmit() {

    var obj = {name, phone, email}

   return console.log(obj)
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
            <button className="submit-btn" onClick={() => HandleSubmit()}>Enviar Formulário</button>
            </div>
        </div>
    )
}

export default Form