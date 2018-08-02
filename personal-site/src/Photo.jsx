import React from 'react';
import image from './img/southRidge.jpg';
import image1 from './img/willRampage.jpg';
import image2 from './img/cardiacRidge_12.6.jpg';

class Photo extends React.Component {

  photoArray = [image, image1, image2];

  render () {
    return (
      <div id="photo-holder">
        <img src={this.photoArray[this.props.currentPhoto]} alt="something" />
      </div>
    )
  }
}

export default Photo;