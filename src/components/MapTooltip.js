import React, { Component } from 'react';

import { getProgramsById } from '../models/programs';
import Tooltip from './Tooltip';
import './MapTooltip.scss'

class MapTooltip extends Component {
  getMouseOverPrograms(programs, mouseOverFeatures) {
    const feature = mouseOverFeatures[0];
    return getProgramsById(programs, feature.properties.ProgID);
  }

  render() {
    const { features, position, programs } = this.props;

    let mouseOverPrograms = [];
    if (features.length) {
      mouseOverPrograms = this.getMouseOverPrograms(programs, features);
    }

    return (
      <Tooltip
        left={position.left - 10}
        top={position.top + 20}
      >
        <div className='MapTooltip-section'>
          <label className='MapTooltip-label'>
            Organization
          </label>
          {mouseOverPrograms[0].OrgName}
        </div>
        <div className='MapTooltip-section'>
          <label className='MapTooltip-label'>
            Indicator Groups
          </label>
          {mouseOverPrograms[0].IndicGrp}
        </div>
        <div className='MapTooltip-more'>
          Click site for more information
        </div>
      </Tooltip>
    );
  }
}

export default MapTooltip;
