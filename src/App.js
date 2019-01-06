import React, { Component } from 'react';
import './resources/style.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Featured/>
      </div>
    );
  }
}

export default App;
