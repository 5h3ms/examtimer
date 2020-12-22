import './App.css';
import Timer from './components/Timer.react';
import React from 'react';

function App() {
  return (
    <div>
      <h1>HacktoberFest 2020 Countdown</h1>
      <h2>With React Hooks!</h2>
      <Timer minutes={5} />
      <Timer days={1} hours={2} minutes={5} seconds={3} />
    </div>
  );
}

export default App;
