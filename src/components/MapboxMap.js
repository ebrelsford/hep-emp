import React, { Component } from 'react';
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';
import Tooltip from './Tooltip';
import './MapboxMap.css';
import { initialMap, mapbox } from '../config';

const MapboxGlMap = ReactMapboxGl({
  accessToken: mapbox.accessToken,
  minZoom: initialMap.minZoom,
  maxZoom: initialMap.maxZoom
});

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mousePosition: null
    };
  }

  findFeatures(map, point) {
    return map.queryRenderedFeatures(point, {
      layers: [
        mapbox.layers.monitoringLines,
        mapbox.layers.monitoringPoints,
        mapbox.layers.monitoringPointsContinuous,
        mapbox.layers.monitoringPolygons
      ]
    });
  }

  onMouseMove(map, event) {
    this.setState({
      mousePosition: {
        left: event.originalEvent.clientX,
        top: event.originalEvent.clientY
      }
    });
    this.props.setMouseOverFeatures(this.findFeatures(map, event.point));
  }

  render() {
    const { mouseOverFeatures } = this.props;
    const { mousePosition } = this.state;

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
          onMouseMove={this.onMouseMove.bind(this)}
          zoom={initialMap.zoom}
        >
          <ZoomControl/>
        </MapboxGlMap>
        {(mousePosition && mouseOverFeatures.length) ? (
          <Tooltip
            left={mousePosition.left - 10}
            top={mousePosition.top + 20}
          >
            {mouseOverFeatures[0].properties.SiteName}
          </Tooltip>
        ) : null}
      </div>
    );
  }
}

export default Map;
