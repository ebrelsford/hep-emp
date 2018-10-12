import React, { Component } from 'react';

import './Tooltip.scss';

class Tooltip extends Component {
  render() {
    const { left, top, text } = this.props;
    return (
      <div className='Tooltip' style={{ left, top }}>
        <div className='Tooltip-arrow'></div>
        {text}
      </div>
    );
  }
}

export default Tooltip;
