import React from 'react';
import image from '../photos/southRidge.jpg';
import image1 from '../photos/willRampage.jpg';
import image2 from '../photos/cardiacRidge_12.6.jpg';

class Photo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {photoArray: [image, image1, image2]};
  }


  render () {
    return (
      <div id="photo-holder">
        <img src={this.state.photoArray[this.props.currentPhoto]} alt="something" />
      </div>
    )
  }
}

export default Photo;