import './App.css';
import Timer from './components/Timer.react';
import React from 'react';

function App() {
  return (
    <div>
      <h1>HacktoberFest 2020 Countdown</h1>
      <h2>With React Hooks!</h2>
      <Timer />
      <Timer />
    </div>
  );
}

export default App;
