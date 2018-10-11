import React, { Component } from 'react';
import { keyHandler, KEYDOWN } from 'react-key-handler';
import './AboutModal.css';

class AboutModal extends Component {
  handleClick(e) {
    if (e.target.classList.contains('AboutModal')) {
      this.props.hideAboutModal();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyValue === 'Escape') {
      this.props.hideAboutModal();
    }
  }

  render() {
    const { hideAboutModal } = this.props;

    return (
      <div className='AboutModal' onClick={this.handleClick.bind(this)}>
        <div className='AboutModal-inner'>
          <button className='AboutModal-close' onClick={hideAboutModal}>&times;</button>
          <h2>About</h2>
          <p>This is where the about text will go.</p>
        </div>
      </div>
    );
  }
}

export default keyHandler({ keyEventName: KEYDOWN, keyValue: 'Escape' })(AboutModal);
