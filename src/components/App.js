import React, { Component } from 'react';
import './App.scss';

import AboutModal from '../containers/AboutModal';
import MapboxMap from '../containers/MapboxMap';
import Sidebar from './Sidebar';

class App extends Component {
  componentWillMount() {
    this.props.fetchPrograms();
  }

  render() {
    const { aboutModal } = this.props;
    return (
      <div className="App">
        <Sidebar/>
        <MapboxMap/>
        {aboutModal.visible ? <AboutModal/> : null}
      </div>
    );
  }
}

export default App;
