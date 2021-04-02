import { React, useState} from 'react'

function RegisterForm(){

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [cnpj, setCnpj] = useState('')

    const[wait,setWait] = useState(false)


function HandleSubmit() {

    if(name && email && phone && cnpj && document.getElementById('checkbox').checked === true) {

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
                document: cnpj,
                lead_type: "register"
        })
        }).then(response => {
            if(response.status === 201 ){
                setWait(true)
                window.location = ('http://localhost:3000/confirmacao')
                
            }
      
        });
    } else {
        window.alert('Preencha todos os campos do formulário.')
    }
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
                value={cnpj}
                onChange={(event) => setCnpj(event.target.value)}
            />
            <div className='use-term'>
                <input type='checkbox' id="checkbox"/>
                <p>Eu concordo e aceito os <strong>Termos de Uso</strong></p>
            </div>
            {wait? 
            <button className="submit-btn-register">Verificando...</button>
            :
            <button className="submit-btn-register" onClick={() => HandleSubmit()}>Enviar Formulário</button>
            }
            
            </div>
        </div>
    )
}

export default RegisterForm