import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Memory Game
        </h1>
        <p className="subTitle">Match Cards To Win</p>
      </header>
      <div className="CardRows">     
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
      </div>
      <div className="CardRows">     
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
      </div>
      <div className="CardRows">     
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
      </div>

    </div>
  );
}

export default App;
