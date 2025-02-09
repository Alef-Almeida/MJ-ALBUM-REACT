import React from 'react'
import './Login.css'
import MyForm2 from '../components/MyForm2/MyForm2'
import { Link } from 'react-router-dom';

const Login = () => {
  
  return (
    <div>
      <div className="login-container">
                <h2 className= "Login">Login</h2>
                <MyForm2 />
                <p className="text-gray-500 text-sm text-center mt-3">
                    Não tem uma conta? <Link to="/cadastro" className="text-blue-500">Cadastrar-se</Link>
                </p>
        </div>
    </div>
  )
}

export default Login
