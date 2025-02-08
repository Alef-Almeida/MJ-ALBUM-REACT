import React from 'react'
import './login.css'
import MyForm from '../components/MyForm/MyForm'

const Login = () => {
  
  return (
    <div>
      <div className="login-container">
                <h2 className= "Login">Login</h2>
                <MyForm />
                <p className="text-gray-500 text-sm text-center mt-3">
                    Esqueceu sua senha? <a href="#" className="text-blue-500">Recuperar</a>
                </p>
        </div>
    </div>
  )
}

export default Login
