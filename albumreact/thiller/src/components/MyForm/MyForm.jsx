import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
    const [name, setName] = useState("");
    const [login, setLogin] = useState("");  // Alterei de email para login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o recarregamento da página

        const userData = {
            name,
            login, 
            email,
            password
        };

        try {
            const response = await fetch("http://localhost:8080/users/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                alert("Usuário cadastrado com sucesso!");
                setName('');
                setLogin('');
                setEmail('');
                setPassword('');
                
            } else {
                const errorData = await response.json().catch(() => ({}));
                alert("Erro ao cadastrar: " + (errorData.message || "Tente novamente."));
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro ao conectar-se ao servidor.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    
                    <label htmlFor="login">Login: </label>
                    <input
                        type="text"
                        name="login"
                        placeholder="Digite seu login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />

                    <label htmlFor="email">E-mail: </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Senha: </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    );
};

export default MyForm;
