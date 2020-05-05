import React from 'react';
import ShowRandomSong from './components/ShowRandomSong';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ShowRandomSong />
      </header>
    </div>
  );
}

export default App;
