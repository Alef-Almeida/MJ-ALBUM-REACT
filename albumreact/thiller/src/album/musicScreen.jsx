import React from "react";
import { Link } from "react-router-dom";
import "./musicScreen.css";


const MusicScreen = () => {
  return (
    <div className="music-screen">
      <div className="container-music">
        {/* Adicione conteúdo aqui */}
      </div>
      
      <div className="container-image">
      <img src="/Xscape.jpeg" alt="Capa Album Xscape" />
      </div>

      <div className="container-related">
        {/* Adicione conteúdo aqui */}
      </div>
    </div>
  );
};

export default MusicScreen;
