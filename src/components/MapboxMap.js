import React, { Component } from 'react';
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';

import { goals, initialMap, mapbox } from '../config';
import { getProgramsByGoals } from '../models/programs';
import MapTooltip from './MapTooltip';
import './MapboxMap.scss';

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

  componentWillReceiveProps(nextProps) {
    if (this.props.filters.goals !== nextProps.filters.goals) {
      const selectedGoals = Object.keys(nextProps.filters.goals).filter(key => {
        return nextProps.filters.goals[key];
      });
      const programs = getProgramsByGoals(this.props.programs, selectedGoals);

      if (selectedGoals.length !== 1) {
        Object.values(mapbox.layers)
          .forEach(layer => {
            layer.goalStyleFields.forEach(field => {
              this.map.setPaintProperty(layer.name, field, initialMap.featureColor);
            });
          });
      }

      let filter;
      if (programs.length) {
        filter = ['in', 'ProgID'].concat(programs.map(program => program.ProgID));
      }

      Object.values(mapbox.layers).forEach(layer => {
        let layerFilter = [...layer.defaultFilter];
        if (filter) {
          layerFilter.push(filter);
        }
        this.map.setFilter(layer.name, layerFilter);
      });

      if (selectedGoals.length === 1) {
        const goal = goals.filter(g => g.filterValue === selectedGoals[0])[0];
        Object.values(mapbox.layers)
          .forEach(layer => {
            // TODO continuous--deal with each color via SVG icon
            layer.goalStyleFields.forEach(field => {
              this.map.setPaintProperty(layer.name, field, goal.featureColor);
            });
          });
      }
    }
  }

  findFeatures(map, point) {
    const layers = Object.values(mapbox.layers).map(layer => layer.name);
    return map.queryRenderedFeatures(point, { layers });
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

  onStyleLoad(map) {
    this.map = map;
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
          onStyleLoad={this.onStyleLoad.bind(this)}
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
