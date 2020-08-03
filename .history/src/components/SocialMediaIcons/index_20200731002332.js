import React, { Component } from 'react';
import './index.css';

class SocialMediaIcons extends Component {
  render() {
    return (
      <div className='icons'>
        <div className='row center'>
          <div className='col s12 m6 offset-m3'>
            <a href='https://www.linkedin.com/in/takudzwa-vengai-a368641a9/'>
              <img
                className='icon'
                src='https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/linkedin-128.png'
                alt='linkedin icon'
              />
            </a>

            <a href='https://github.com/Takudzwa413/SHOP'>
              <img
                className='icon'
                src='https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/github-128.png'
                alt='github icon'
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialMediaIcons;
