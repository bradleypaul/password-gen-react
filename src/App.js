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
      length: 8,
      copySuccess: false
    };

    this.state = this.default;
  }

  generate() {
    const password = generatePassword(this.state);
    this.setState(() => { return { password }; });
  }

  updateLength(value) {
    this.setState(() => { return { 'length': parseInt(value) }; });
  }

  check(e) {
    const temp = makeObject(e.target.name, e.target.checked);
    this.setState(() => { return temp; });
  }

  copy() {
    const el = this.textarea;
    el.select();
    document.execCommand('copy');
    this.setState(() => { return {copySuccess: true}; })
  }

  reset() {
    this.setState(() => this.default);
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
                placeholder="Your Secure Password. Click here to copy password."
                aria-label="Generated Password"
                value={this.state.password}
                onClick={() => this.copy()}
                ref={(textarea) => this.textarea = textarea}
              ></textarea>
              {
                this.state.copySuccess ?
                  <div style={{ "color": "green" }}>
                    Success!
                  </div> : null
              }
            </div>
            <div className="card-footer">
              <button className="btn" onClick={() => this.generate()}>
                Generate Password
              </button>
              <button className="btn" onClick={() => this.reset()}>
                Reset
              </button>
            </div>
         Criteria: (Must select one or more)
         <div>
              <label>
                <input type="checkbox" name="lowercase" checked={this.state.lowercase} onChange={(e) => this.check(e)}></input>
                Include Lowercase
             </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="uppercase" checked={this.state.uppercase} onChange={(e) => this.check(e)}></input>
                Include Uppercase
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="numbers" checked={this.state.numbers} onChange={(e) => this.check(e)}></input>
                Include Numbers
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="specialCharacters" checked={this.state.specialCharacters} onChange={(e) => this.check(e)}></input>
                  Include Special Characters
                </label>
            </div>
            <div>
              <label>
                <div>
                  <input type="range" min="8" max="128" value={this.state.length} onChange={(e) => this.updateLength(e.target.value)}></input>
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
