import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cadastro from './cadastro/Cadastro';
import About from './about/About';
import Home from './home/home'
import Login from './login/Login';
import MusicScreen from './album/musicScreen';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/musicScreen" element={<MusicScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;