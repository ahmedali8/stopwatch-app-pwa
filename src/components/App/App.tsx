import React from 'react';
import Timer from '../Timer/Timer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="app-heading">Stopwatch App</div>
      <Timer />
    </div>
  );
}

export default App;
