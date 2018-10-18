import React, { Component } from 'react';
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';

import { goals, initialMap, mapbox, monitoringStatuses } from '../config';
import { filterPrograms } from '../models/programs';
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
    const filtersChanged = (
      this.props.filters.goals !== nextProps.filters.goals ||
      this.props.filters.indicatorCategory !== nextProps.filters.indicatorCategory ||
      this.props.filters.monitoringStatuses !== nextProps.filters.monitoringStatuses ||
      this.props.filters.organizationName !== nextProps.filters.organizationName
    );

    if (filtersChanged) {
      this.handleUpdatedFilters(nextProps.filters);
    }
  }

  handleUpdatedFilters(nextFilters) {
    const updatedFilters = {};
    Object.values(mapbox.layers).forEach(layer => {
      updatedFilters[layer.name] = [...layer.defaultFilter];
    });

    const selectedGoals = Object.keys(nextFilters.goals).filter(key => nextFilters.goals[key]);

    // Update layer styles by goal
    if (selectedGoals.length === 1) {
      const goal = goals.filter(g => g.filterValue === selectedGoals[0])[0];
      this.setMonitoringStatusStyles(goal);
    }
    else {
      this.resetMonitoringStatusStyles();
    }

    // Filter by prorgram
    const programs = filterPrograms(
      this.props.programs,
      selectedGoals,
      nextFilters.indicatorCategory ? [nextFilters.indicatorCategory.value] : [],
      nextFilters.organizationName ? [nextFilters.organizationName.value] : []
    );

    const programFilter = ['in', 'ProgID'].concat(programs.map(program => program.ProgID));
    Object.values(mapbox.layers).forEach(layer => {
      updatedFilters[layer.name].push(programFilter);
    });

    // Filter by monitoring status
    const filteredMonitoringStatuses = nextFilters.monitoringStatuses;

    // For each monitoringStatus, if it's active show it, else hide it
    monitoringStatuses.forEach(monitoringStatus => {
      if (filteredMonitoringStatuses.indexOf(monitoringStatus.value) >= 0) {
        monitoringStatus.layers.forEach(layer => {
          this.map.setLayoutProperty(layer, 'visibility', 'visible');
        });
      }
      else {
        monitoringStatus.layers.forEach(layer => {
          this.map.setLayoutProperty(layer, 'visibility', 'none');
        });
      }
    });

    const filterValues = monitoringStatuses
      .filter(monitoringStatus => filteredMonitoringStatuses.indexOf(monitoringStatus.value) >= 0)
      .map(monitoringStatus => monitoringStatus.filterValue);
    updatedFilters['monitoring-polygons'].push(['in', 'Legend', ...filterValues]);

    Object.keys(updatedFilters).forEach(layer => {
      this.map.setFilter(layer, updatedFilters[layer]);
    });
  }

  setMonitoringStatusStyles(goal) {
    if (!this.map) return;
    Object.values(mapbox.layers)
      .forEach(layer => {
        // TODO continuous--deal with each color via SVG icon
        layer.goalStyleFields.forEach(field => {
          this.map.setPaintProperty(layer.name, field, goal.featureColor);
        });
      });
  }

  resetMonitoringStatusStyles() {
    if (!this.map) return;
    Object.values(mapbox.layers)
      .forEach(layer => {
        layer.goalStyleFields.forEach(field => {
          this.map.setPaintProperty(layer.name, field, initialMap.featureColor);
        });
      });
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
