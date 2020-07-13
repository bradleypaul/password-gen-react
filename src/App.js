import React from 'react';
import generatePassword from './generate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { password: '' };
  }

  generate() {
    const password = generatePassword({
      length: 10,
      includeLowercase: true,
      includeUppercase: true,
      includeNumbers: true,
      includeSpecialCharacters: true
    });
    this.setState((state, props) => {
      return {
        password
      }
    });
  }

  check(e) {
    console.log(e)
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Password Generator React</h1>
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
              value={this.state.password}
            ></textarea>
          </div>
          <div className="card-footer">
            <button id="generate" className="btn" onClick={() => this.generate()}>Generate Password</button>
          </div>
          {/* Criteria: 
         <label><input type="checkbox"></input>Include Lowercase</label>
         <label><input type="checkbox"></input>Include Uppercase</label>
         <label><input type="checkbox"></input>Include Numbers</label>
         <label><input type="checkbox" onClick={(e) => this.check(e)}></input>Include Special Characters</label> */}
        </div>
      </div>
    );
  }
}

export default App;
