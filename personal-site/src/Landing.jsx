import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Container.jsx';

class LandingPage extends React.Component {

  render () {
    return (
      <Router >
        <div id="landing">
          <button id="entry" onClick={this.props.onClick}>
            <Link to="/container">Enter</Link>
          </button>

          <Route exact path="/container" component={Home}/>
        </div>
      </Router >
    )
  }
}

export default LandingPage;

