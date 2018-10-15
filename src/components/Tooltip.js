import React, { Component } from 'react';

import './Tooltip.scss';

class Tooltip extends Component {
  render() {
    const { children, left, top } = this.props;
    return (
      <div className='Tooltip' style={{ left, top }}>
        <div className='Tooltip-arrow'></div>
        {children}
      </div>
    );
  }
}

export default Tooltip;
