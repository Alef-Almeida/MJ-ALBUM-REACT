import React from 'react'
import './Cadastro.css'
import MyForm from '../components/MyForm/MyForm'
import { Link } from 'react-router-dom';

const Cadastro = () => {
  
  return (
    <div>
      <div className="cadastro-container">
                <h2 className= "Cadastro">Cadastro</h2>
                <MyForm />
                <p className="text-gray-500 text-sm text-center mt-3">
                    Já tem uma conta? <Link to="/login" className="text-blue-500">Login</Link>
                </p>
        </div>
    </div>
  )
}

export default Cadastro
