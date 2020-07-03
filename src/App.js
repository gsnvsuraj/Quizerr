import React from 'react';
import './App.css';
import Main from './Component/main';
import './bootstrap.min.css';
import Navbar from './Component/navbar';

class App extends React.Component {

  

  render() {
    return (
      <div className="App">
        <div className="App-header p-2">
        <Navbar />
        </div>
        <div className="App-body">
          <Main />
        </div>
      </div>
    );

  }
}

export default App;
