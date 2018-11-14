import React, { Component } from 'react';
import classNames from 'classnames';

import './Tooltip.scss';

class Tooltip extends Component {
  render() {
    const { children, left, orientation, top } = this.props;
    let arrowOrientation = 'top';
    if (orientation) {
      arrowOrientation = orientation;
    }
    return (
      <div
        className={classNames('Tooltip', `orientation-arrow-${arrowOrientation}`)}
        style={{ left, top }}
      >
        <div className='Tooltip-arrow'></div>
        {children}
      </div>
    );
  }
}

export default Tooltip;
