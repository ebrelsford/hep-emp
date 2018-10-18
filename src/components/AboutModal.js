import React, { Component } from 'react';
import { keyHandler, KEYDOWN } from 'react-key-handler';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
        <Tabs>
          <TabList>
            <Tab>About this Map</Tab>
            <Tab>How to Use the Map</Tab>
            <Tab>About the Data</Tab>
            <Tab>About the Environmental Monitoring Plan</Tab>
            <Tab>About the Harbor Estuary Program</Tab>
          </TabList>

          <TabPanel>
            about
          </TabPanel>
          <TabPanel>
            use
          </TabPanel>
          <TabPanel>
            data
          </TabPanel>
          <TabPanel>
            plan
          </TabPanel>
          <TabPanel>
            program
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default keyHandler({ keyEventName: KEYDOWN, keyValue: 'Escape' })(AboutModal);
