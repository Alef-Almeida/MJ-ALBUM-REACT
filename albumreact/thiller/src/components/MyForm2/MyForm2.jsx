import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import "./MyForm2.css";

const MyForm2 = () => {
    const [login, setLogin] = useState("");  
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Inicializando useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o recarregamento da página

        const userData = {
            login, 
            password
        };

        try {
            const response = await fetch("http://localhost:8080/users/login", { // Rota do login
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                alert("Login bem-sucedido!");
                // Redireciona para a página principal ou qualquer outra após login
                navigate("/home"); 
            } else {
                const errorData = await response.json().catch(() => ({}));
                alert("Erro ao realizar login: " + (errorData.message || "Tente novamente."));
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
                    <label htmlFor="login">Login: </label>
                    <input
                        type="text"
                        name="login"
                        placeholder="Digite seu login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
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
                <input type="submit" value="Entrar" />
            </form>
        </div>
    );
};

export default MyForm2;
