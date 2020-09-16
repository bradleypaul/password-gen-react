import React, { useState } from 'react';
import { generatePassword, makeObject } from './generate';
import './App.css';

function App() {
  const defaultSettings = {
    password: '',
    uppercase: false,
    lowercase: false,
    specialCharacters: false,
    numbers: false,
    length: 8,
    copySuccess: false
  };

  const [configs, setConfigs] = useState(defaultSettings);

  function generate() {
    const password = generatePassword(configs);
    setConfigs({
      ...configs,
      password
    });
  }

  function updateLength(length) {
    setConfigs({
      ...configs,
      length
    });
  }

  function check(e) {
    const temp = makeObject(e.target.name, e.target.checked);
    setConfigs({
      ...configs,
      [e.target.name]: e.target.checked
    })
  }

  function copy(e) {
    const el = e.target;
    console.log(e.target.value)// textarea;
    el.select();
    document.execCommand('copy');
  }

  function reset() {
    setConfigs(defaultSettings);
  }
  return (
    <div className="App">
      <header>
        <h1>Password Generator React</h1>
      </header>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h2>Generate a Password</h2>
          </div>
          <div className="card-body">
            <textarea
              readOnly
              id="password"
              placeholder="Your Secure Password. Click here to copy password."
              aria-label="Generated Password"
              value={configs.password}
              onClick={copy}
            ></textarea>
            {
              configs.copySuccess ?
                <div style={{ "color": "green" }}>
                  Success!
                  </div> : null
            }
          </div>
          <div className="card-footer">
            <button className="btn" onClick={generate}>
              Generate Password
              </button>
            <button className="btn" onClick={reset}>
              Reset
              </button>
          </div>
         Criteria: (Must select one or more)
         <div>
            <label>
              <input type="checkbox" name="lowercase" checked={configs.lowercase} onChange={(e) => check(e)}></input>
                Include Lowercase
             </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="uppercase" checked={configs.uppercase} onChange={(e) => check(e)}></input>
                Include Uppercase
              </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="numbers" checked={configs.numbers} onChange={(e) => check(e)}></input>
                Include Numbers
              </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="specialCharacters" checked={configs.specialCharacters} onChange={(e) => check(e)}></input>
                  Include Special Characters
                </label>
          </div>
          <div>
            <label>
              <div>
                <input type="range" min="8" max="128" value={configs.length} onChange={(e) => updateLength(e.target.value)}></input>
              </div>
                Length: {configs.length} (Between 8 and 128)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
