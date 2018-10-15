import React, { Component } from 'react';
import Filters from '../containers/Filters';
import Footer from '../containers/Footer';
import Popup from '../containers/Popup';
import './Sidebar.scss';

import logoHep from '../img/logo-hep.svg';
import logoHrf from '../img/logo-hrf.svg';

import {
  hepLink,
  hrfLink,
  organizationName,
  projectName
} from '../config';

class Sidebar extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <div className='Sidebar-logos'>
          <a className='Sidebar-logo' href={hepLink}>
            <img src={logoHep} alt='NY/NJ Harbor & Estuary Project' />
          </a>
          <a className='Sidebar-logo' href={hrfLink}>
            <img src={logoHrf} alt='Hudson River Foundation' />
          </a>
        </div>
        <div className='Sidebar-main'>
          <h1 className='Sidebar-header'>
            <div className='Sidebar-header-organization'>{organizationName}</div>
            <div className='Sidebar-header-project'>{projectName}</div>
          </h1>
          <Filters/>
          <Popup/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Sidebar;
