import React, { Component } from 'react';
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';
import './MapboxMap.css';
import { initialMap, mapbox } from '../config';

const MapboxGlMap = ReactMapboxGl({
  accessToken: mapbox.accessToken,
  minZoom: initialMap.minZoom,
  maxZoom: initialMap.maxZoom
});

class Map extends Component {
  render() {
    return (
      <div className='MapboxMap-container'>
        <MapboxGlMap
          // eslint-disable-next-line
          style={mapbox.styleUrl}
          containerStyle={{
            height: '100%',
            width: '100%'
          }}
          center={initialMap.center}
          maxBounds={initialMap.maxBounds}
          zoom={[initialMap.zoom]}
        >
          <ZoomControl/>
        </MapboxGlMap>
      </div>
    );
  }
}

export default Map;
