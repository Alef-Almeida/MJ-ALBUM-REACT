import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">logo</Link>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cadastro">Cadastrar</Link>
      </nav>
    </header>
  )
}

export default Navbar;  