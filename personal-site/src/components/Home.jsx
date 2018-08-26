
import React from 'react';
import { FontAwesomeIcon } from 'react-fontawesome';
import Description from './Description.jsx';
import Photo from './Photo.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      landingHidden: false,
    }
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);

  }

  toggleHidden() {
    this.setState({
      landingHidden: !this.state.Hidden
    })
  }

  nextPage() {
    let currentPage = this.state.page;
    if ( currentPage < 2 ) {
      let newPage = currentPage + 1;
      this.setState({page: newPage});
    };
  }

  previousPage() {
    let currentPage = this.state.page;
    if ( currentPage > 0 ) {
      let newPage = currentPage - 1;
      this.setState({page: newPage});
    };
  }

  render () {
    return (
      
        <div className="box">
          <div id="title">
            Will Howard <br />
            <div id="title-menu">
              <table >
                <tbody>
                  <tr>
                    <td colSpan='2' >
                      <a href="https://www.github.com/fairlycasual">
                        <div>
                          GitHub <FontAwesomeIcon icon={['fab', 'github']} />
                        </div>
                      </a>
                    </td>
                    <td colSpan='2'>
                      <a href="https://linkedin.com/in/wph91">
                        <div>
                            LinkedIn <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </div>
                      </a>
                    </td>
                    <td colSpan='2'>
                      <a href="https://docs.google.com/document/d/1GnRfgdXfp1opdutuVWvLRYdvcFepkHWDDV5IkI51UYo/edit?usp=sharing">
                        <div>
                          Resume <FontAwesomeIcon icon={['fa','file']} />
                        </div>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
          <div id="description">
            <Description currentPage={this.state.page} nextPage={this.nextPage} previousPage={this.previousPage}/>
          </div>
          <div className="photo">
            <Photo currentPhoto={this.state.page}/>
          </div>
        </div>
 
    );
  }
}

export default Home;