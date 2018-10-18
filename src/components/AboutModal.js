import React, { Component } from 'react';
import { keyHandler, KEYDOWN } from 'react-key-handler';
import ReactMarkdown from 'react-markdown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './AboutModal.scss';

class AboutModal extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.keyValue === 'Escape') {
      this.props.hideAboutModal();
    }
  }

  render() {
    const { content, hideAboutModal } = this.props;
    console.log(content);

    return (
      <div className='AboutModal'>
        <button className='AboutModal-close' onClick={hideAboutModal}>&times;</button>
        <div className='AboutModal-header'>
          <h2>The Environmental Monitoring Plan Map</h2>
        </div>

        <div className='AboutModal-body'>
          <Tabs>
            <TabList>
              <Tab>About this Map</Tab>
              <Tab>How to Use the Map</Tab>
              <Tab>About the Data</Tab>
              <Tab>About the Environmental Monitoring Plan</Tab>
              <Tab>About the Harbor Estuary Program</Tab>
            </TabList>

            <TabPanel>
              <ReactMarkdown source={content.content.aboutThisMap}/>
            </TabPanel>
            <TabPanel>
              <ReactMarkdown source={content.content.howToUse}/>
            </TabPanel>
            <TabPanel>
              <ReactMarkdown source={content.content.aboutData}/>
            </TabPanel>
            <TabPanel>
              <ReactMarkdown source={content.content.aboutPlan}/>
            </TabPanel>
            <TabPanel>
              <ReactMarkdown source={content.content.aboutProgram}/>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default keyHandler({ keyEventName: KEYDOWN, keyValue: 'Escape' })(AboutModal);
