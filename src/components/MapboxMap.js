import React, { Component } from 'react';
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';
import './MapboxMap.scss';
import { initialMap, mapbox } from '../config';
import MapTooltip from './MapTooltip';

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

  onClick(map, event) {
    this.setState({
      mousePosition: {
        left: event.originalEvent.clientX,
        top: event.originalEvent.clientY
      }
    });
    this.props.setClickedFeatures(this.findFeatures(map, event.point));
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
    const { mouseOverFeatures, programs } = this.props;
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
          onClick={this.onClick.bind(this)}
          onMouseMove={this.onMouseMove.bind(this)}
          zoom={initialMap.zoom}
        >
          <ZoomControl/>
        </MapboxGlMap>

        {(mousePosition && mouseOverFeatures.length) ? (
          <MapTooltip
            features={mouseOverFeatures}
            position={mousePosition}
            programs={programs}
          />
        ) : null}
      </div>
    );
  }
}

export default Map;
