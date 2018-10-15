import React, { Component } from 'react';
import { getProgramsById } from '../models/programs';
import './Popup.scss';

class ProgramPopup extends Component {
  render() {
    const {
      Contact,
      Freq,
      HEPgoal,
      IndicGrp,
      Indicator,
      OrgName,
      ProgName,
      ProgObjectv,
      QAPP,
      Reference,
      SpatExtnt,
      status,
      TempExtnt,
    } = this.props.program;

    return (
      <div className='Popup-section'>
        <div className='Popup-row'>
          <div className='Popup-label'>Organization Name</div>
          <div className='Popup-value'>{OrgName}</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Goal Addressed</div>
          <div className='Popup-value'>{HEPgoal}</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Indicator Category</div>
          <div className='Popup-value'>{IndicGrp}</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Indicators</div>
          <div className='Popup-value'>{Indicator}</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Program Name</div>
          <div className='Popup-value'>{ProgName}</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Program Objective</div>
          <div className='Popup-value'>{ProgObjectv}</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Monitoring Status</div>
          <div className='Popup-value'>{status}</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Quality Assurance Protocol</div>
          <div className='Popup-value'>{QAPP}</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Spatial Extent</div>
          <div className='Popup-value'>{SpatExtnt}</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Temporal Extent</div>
          <div className='Popup-value'>{TempExtnt}</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Sampling Frequency</div>
          <div className='Popup-value'>{Freq}</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Reference</div>
          <div className='Popup-value'>{Reference}</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Contact</div>
          <div className='Popup-value'>{Contact}</div>
        </div>
      </div>
    );
  }
}

class Popup extends Component {
  getStatusLabel(status) {
    if (status === 'Historic/Nonactive') {
      return 'Non-active';
    }
    return status;
  }

  getSelectedPrograms(programs, clickedFeatures) {
    const feature = clickedFeatures[0];
    return getProgramsById(programs, feature.properties.ProgID)
      .map(program => Object.assign({}, program, {
        status: this.getStatusLabel(feature.properties.Legend)
      }));
  }

  render() {
    const { clickedFeatures, programs } = this.props;
    let selectedPrograms = [];
    if (clickedFeatures && clickedFeatures.length && programs && programs.length) {
      selectedPrograms = this.getSelectedPrograms(programs, clickedFeatures);
    }

    return (
      <div className='Popup'>
        {selectedPrograms.map(program => (
          <ProgramPopup key={program.ProgID} program={program}/>
        ))}
      </div>
    );
  }
}

export default Popup;
