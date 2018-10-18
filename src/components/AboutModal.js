import React, { Component } from 'react';
import { keyHandler, KEYDOWN } from 'react-key-handler';
import './AboutModal.scss';

class AboutModal extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.keyValue === 'Escape') {
      this.props.hideAboutModal();
    }
  }

  render() {
    const { hideAboutModal } = this.props;

    return (
      <div className='AboutModal'>
        <button className='AboutModal-close' onClick={hideAboutModal}>&times;</button>
        <h2>The Environmental Monitoring Plan Map</h2>
        <p>This is where the about text will go.</p>
      </div>
    );
  }
}

export default keyHandler({ keyEventName: KEYDOWN, keyValue: 'Escape' })(AboutModal);
