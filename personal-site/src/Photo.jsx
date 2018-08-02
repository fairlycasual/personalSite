import React from 'react';
import image from './img/southRidge.jpg';

class Photo extends React.Component {
  render () {
    return (
      <div id="photo-holder">
        <img src={image} alt="south ridge" />
      </div>
    )
  }
}

export default Photo;