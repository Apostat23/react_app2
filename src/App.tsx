import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Start } from './pages/start/Start';
import Stripe from './pages/Stripe/Start/index';
import Pokeapi from './components/Pokemon/pages/Start/index';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Start />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="/stripe" element={<Stripe/>} />
        <Route 
          path="/pokeapi" 
          element={<Pokeapi fill='purple' stroke='black'/>} 
        />
      </Routes>
    </div>
  );
}

export default App;
