import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Description from './Description.jsx';
import Photo from './Photo.jsx';

class Info extends React.Component {
  render () {
    return (
      <div className="box">
        <div id="title">
          Will Howard
        </div>
        <div id="description">
          <table >
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
                     Resume <FontAwesomeIcon icon={['fab', 'file']} />
                  </div>
                </a>
              </td>
            </tr>
          </table>
          <Description />
        </div>
        <div className="photo">
          <Photo />
        </div>
      </div>
    );
  }
}

export default Info;