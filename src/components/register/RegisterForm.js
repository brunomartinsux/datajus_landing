import { React, useState} from 'react'

function RegisterForm(){

    const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')


function HandleSubmit() {

    var obj = {name, phone, email}

   return console.log(obj)
}

    return(
        <div className='register-form-container'>
            <div className='register-content-container'>
                <h1>FORMULÁRIO DE CADASTRO</h1>
                <p>Preencha todas as informações abaixo:</p>
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
            <label className="name-label">CPF OU CNPJ</label>
            <input
                className="profile-input"
                placeholder="     000.000.000/0001-00"
                type="text"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <div className='use-term'>
                <input type='checkbox'/>
                <p>Eu concordo e aceito os <strong>Termos de Uso</strong></p>
            </div>
            <button className="submit-btn-register" onClick={() => HandleSubmit()}>Enviar Formulário</button>
            </div>
        </div>
    )
}

export default RegisterForm