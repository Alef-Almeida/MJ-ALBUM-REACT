import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
    // gerencias de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    
    const handleName = (e) => {
        setName(e.target.value)
    };
    console.log(name, email);
  return (
    <div>
        {/*1 - criacao do form */}
        <form>
            <div>
                {/* form nome */}
                <label htmlFor="name ">Nome: </label>
                <input type="text" name="name" placeholder="Digite seu nome"
                 onChange={handleName}/>
                {/* form email simplificado */}
                <label htmlFor="email ">E-mail: </label>
                <input type="text" name="name" placeholder="Digite seu nome" 
                onChange={(e) => setEmail(e.target.value)}/>
                {/* form senha*/}
                <label htmlFor="password ">Senha: </label>
                <input type="text" name="password" placeholder="Digite sua senha"/>
            </div>
            <input type="submit" value= "Enviar" />
        </form>
    </div>
  )
}

export default MyForm
