import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './login/Login';
import About from './about/About';
import Home from './home/home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <h1>TESTE MAIN</h1> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;