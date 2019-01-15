import React, { Component } from 'react';
import './resources/style.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import Location from './components/location/Location';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        
        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>
      </div>
    );
  }
}

export default App;
