import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import Info from './Container.jsx';
library.add(fab)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Info />
      </div>
    );
  }
}

export default App;
