import React from 'react';
import './App.css';
import Main from './Component/main';
import './bootstrap.min.css';

class App extends React.Component {

  darkMode() {
    let ele = document.body;
    ele.classList.toggle('darkMode');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header p-2">
          <h1 className="quizHead">ANIME QUIZERR</h1>
          <div className="toggle custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="darkSwitch" onClick={this.darkMode} />
            <label class="custom-control-label" for="darkSwitch">Dark Theme</label>
          </div>
        </div>
        <div>
          <Main />
        </div>
      </div>
    );

  }
}

export default App;
