import React from 'react';
import Projects from './Projects.jsx';
import Intro from './Intro.jsx';
import Academics from './Academics.jsx';

class Description extends React.Component {

  constructor(props) {
    super(props);
    this.state = {textArray: [<Intro />, <Projects />, <Academics />]};
  }

  render () {
    return (
      <div id="text-description">
         
          {this.state.textArray[this.props.currentPage]}
      
        <div id="button-container">
            <button onClick={this.props.previousPage}>Previous</button>
            <button onClick={this.props.nextPage}>Next</button>
        </div>
      </div>
    )
  }
}

export default Description;