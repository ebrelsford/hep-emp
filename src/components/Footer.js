import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    const { showAboutModal } = this.props;

    return (
      <div className='Footer'>
        <div className='Footer-left'>
          <button className='Footer-button' onClick={showAboutModal}>About the map</button>
        </div>
        <div className='Footer-right'>
          <button className='Footer-button'>Download the Program Database</button>
        </div>
      </div>
    );
  }
}

export default Footer;
