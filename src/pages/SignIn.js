import React from 'react'
import './signIn.css'
import RegisterForm from '../components/register/RegisterForm'
import ToDo from '../components/register/ToDo'

function Register(){

    return(
        <div className='signin-container'>
            <ToDo/>
            <RegisterForm/>
        </div>
    )
}

export default Register