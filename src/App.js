import React, { Component } from 'react';
import './resources/style.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import Location from './components/location/Location';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Featured/>
        <Location/>
      </div>
    );
  }
}

export default App;
