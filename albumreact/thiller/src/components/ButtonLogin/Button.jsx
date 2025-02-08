import React from "react";

const LoginButton = ({ onClick, text = "Entrar" }) => {
    return (
        <button 
            onClick={onClick} 
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
        >
            {text}
        </button>
    );
};

export default LoginButton;
