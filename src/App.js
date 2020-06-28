import React from 'react';
import './App.css';
import Main from './Component/main';
import './bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header p-2">
          <h1 className="col">ANIME QUIZERR</h1>
        </div>
        <div>
          <Main />
        </div>
      </div>
    );

  }
}

export default App;
