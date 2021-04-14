import { React, useState} from 'react'
const axios = require('axios')

function RegisterForm(){

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [cnpj, setCnpj] = useState('')

    const[wait,setWait] = useState(false)


function HandleSubmit() {

    const Input0 = document.getElementsByClassName('profile-input').item(0)
    const Input1 = document.getElementsByClassName('profile-input').item(1)
    const Input2 = document.getElementsByClassName('profile-input').item(2)
    const Input3 = document.getElementsByClassName('profile-input').item(3)

    if(name && email && phone && cnpj && document.getElementById('checkbox').checked === true) {

        axios({
            method: 'POST',
            url: `https://apilayer.net/api/check?access_key=2940f4bdc3324af140db028708e890f1&email=${email}`
        }).then(response => {

            //VERIFICANDO EMAIL

            if(response.format_valid && response.smtp_check){
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
                window.location = ('http://datajus.site/confirmacao')
                
            }
      
        });
            } else {
                window.alert("OPS! O Email informado é inválido...")
            }
        });
        
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
        if(cnpj === ''){
            Input3.className = 'profile-input shake-horizontal'
        }
        if(document.getElementById('checkbox').checked === false){
            document.getElementById('checkbox').className = 'checkbox shake-horizontal'
        }
        
        setTimeout(function(){
            Input0.className = 'profile-input'
            Input1.className = 'profile-input'
            Input2.className = 'profile-input'
            Input3.className = 'profile-input'
            document.getElementById('checkbox').className = 'checkbox'

        }, 1000)


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