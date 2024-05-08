// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Game from './Routes/game';
import Intro from './Routes/intro';
import Room from './Routes/room';
import Start from './Routes/start';
import './App.css';

const App = () => {
  return (
    <section className="main">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/start" element={<Start />} />
        <Route path="/room" element={<Room />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </section>
  );
};

export default App;
