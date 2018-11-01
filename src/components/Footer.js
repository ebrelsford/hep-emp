import React, { Component } from 'react';

import { programDatabaseUrl } from '../config';
import './Footer.scss';

class Footer extends Component {
  render() {
    const { showAboutModal } = this.props;

    return (
      <div className='Footer'>
        <div className='Footer-left'>
          <button className='Footer-button' onClick={showAboutModal}>About the Map</button>
        </div>
        <div className='Footer-right'>
          <a href={programDatabaseUrl} className='Footer-button' target='_blank' rel='noopener noreferrer'>Download the Program Database</a>
        </div>
      </div>
    );
  }
}

export default Footer;
