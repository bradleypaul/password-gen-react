import React from 'react';
import generatePassword from './generate';
import './App.css';

function App() {
  function generate(e) {
    console.log(generatePassword({
      length: 10,
      includeLowercase: true,
      includeUppercase: true,
      includeNumbers: true,
      includeSpecialCharacters: true
  }));
  }
  return (
    <div className="App">
      <header>
        <h1>Password Generator</h1>
      </header>
      <div className="card">
        <div className="card-header">
          <h2>Generate a Password</h2>
        </div>
        <div className="card-body">
          <textarea
            readOnly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
          ></textarea>
        </div>
        <div className="card-footer">
          <button id="generate" className="btn" onClick={generate}>Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
