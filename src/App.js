import React from 'react';
import { generatePassword, makeObject } from './generate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.default = {
      password: '',
      uppercase: false,
      lowercase: false,
      specialCharacters: false,
      numbers: false,
      length: 8
    };

    this.state = this.default;
  }

  generate() {
    const password = generatePassword(this.state);
    this.setState(() => {
      return {
        password
      }
    });
  }

  updateLength(value) {
    this.setState(() => {
      return {'length': value}
    });
  }

  check(e) {
    const temp = makeObject(e.target.name, this.state[e.target.name]);
    this.setState(() => {
      return temp;
    });
  }

  reset() { 
    this.setState(() => this.default);
    // turn off checkboxes
  }

  render() {
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
                placeholder="Your Secure Password"
                aria-label="Generated Password"
                value={this.state.password}
              ></textarea>
            </div>
            <div className="card-footer">
              <button id="generate" className="btn" onClick={() => this.generate()}>
                Generate Password
              </button>
              <button id="generate" className="btn" onClick={() => this.reset()}>
                Reset
              </button>
            </div>
         Criteria: (Must select one or more)
         <div>
              <label>
                <input type="checkbox" name="lowercase" onClick={(e) => this.check(e)}></input>
                Include Lowercase
             </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="uppercase" onClick={(e) => this.check(e)}></input>
                Include Uppercase
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="numbers" onClick={(e) => this.check(e)}></input>
                Include Numbers
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="specialCharacters" onClick={(e) => this.check(e)}></input>
                  Include Special Characters
                </label>
            </div>
            <div>
              <label>
                <div>
                  <input type="range" min="8" max="128" defaultValue="8" onChange={(e) => this.updateLength(e.target.value)}></input>
                </div>
                Length: {this.state.length} (Between 8 and 128)
                </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
