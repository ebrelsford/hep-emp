import React, { Component } from 'react';
import './Popup.scss';

class Popup extends Component {
  render() {
    return (
      <div className='Popup'>
        <div className='Popup-row'>
          <div className='Popup-label'>Organization Name</div>
          <div className='Popup-value'>Newtown Creek Alliance</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Goal Addressed</div>
          <div className='Popup-value'>Water Quality Monitoring</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Indicator Category</div>
          <div className='Popup-value'>Dissolved Oxygen, Nutrients, In Situ parameters</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Indicators</div>
          <div className='Popup-value'>Dissolved Oxygen, Phosphorous, Water Temperature, Salinity</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Program Name</div>
          <div className='Popup-value'>Program name here</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Program Objective</div>
          <div className='Popup-value'>Tracking parameters like bacteria and oxygen levels at various Creek locations, while also analyzing factors like rainfall and temperature to understand where water quality varies and why.</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Monitoring Status</div>
          <div className='Popup-value'>Active</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Quality Assurance Protocol</div>
          <div className='Popup-value'></div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Spatial Extent</div>
          <div className='Popup-value'>7 stations: Newtown Creek</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Temporal Extent</div>
          <div className='Popup-value'>2016/7, ongoing</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Sampling Frequency</div>
          <div className='Popup-value'>4 to 8x per month for 26 weeks/year</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Reference</div>
          <div className='Popup-value'>www.newtowncreekalliance.org/water-quality-sampling/</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Contact</div>
          <div className='Popup-value'>Willis Elkins, welkins@newtowncreekalliance.org</div>
        </div>
        <div className='Popup-row'>
          <div className='Popup-label'>Data Reduction</div>
          <div className='Popup-value'>2016/7 Report and excel sheets available</div>
        </div>
      </div>
    );
  }
}

export default Popup;
