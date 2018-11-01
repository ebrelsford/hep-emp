import React, { Component } from 'react';
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';
import countBy from 'lodash.countby';
import difference from 'lodash.difference';
import flatten from 'lodash.flatten';
import uniq from 'lodash.uniq';

import { goals, initialMap, mapbox, monitoringStatuses } from '../config';
import { filterPrograms, getProgramsByGoal } from '../models/programs';
import MapTooltip from './MapTooltip';
import './MapboxMap.scss';

const MapboxGlMap = ReactMapboxGl({
  accessToken: mapbox.accessToken,
  attributionControl: false,
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

    // Filter by prorgram
    const programs = filterPrograms(
      this.props.programs,
      selectedGoals,
      nextFilters.indicatorCategory ? [nextFilters.indicatorCategory.value] : [],
      nextFilters.organizationName ? [nextFilters.organizationName.value] : []
    );

    // Update layer styles by goal
    if (selectedGoals.length > 0) {
      this.setMonitoringStatusStyles(goals.filter(g => selectedGoals.indexOf(g.filterValue) >= 0), programs);
    }
    else {
      this.resetMonitoringStatusStyles();
    }

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
    ['monitoring-lines', 'monitoring-polygons'].forEach(layer => {
      updatedFilters[layer].push(['in', 'Legend', ...filterValues]);
    });

    Object.keys(updatedFilters).forEach(layer => {
      this.map.setFilter(layer, updatedFilters[layer]);
    });
  }

  setMonitoringStatusStyles(goals, programs) {
    if (!this.map) return;

    // Group programs by their goals
    const groupedPrograms = {};
    goals.forEach(goal => {
      groupedPrograms[goal.filterValue] = uniq(getProgramsByGoal(programs, goal.filterValue).map(p => p.ProgID));
    });

    if (goals.length > 1) {
      const counted = countBy(flatten(Object.values(groupedPrograms)));
      const multipleGoals = Object.keys(counted).filter(program => counted[program] > 1);

      if (multipleGoals.length > 0) {
        Object.keys(groupedPrograms).forEach(group => {
          groupedPrograms[group] = difference(groupedPrograms[group], multipleGoals);
        });
        groupedPrograms['multiple'] = multipleGoals;
      }
    }

    // Create a color style by program ID
    const goalsColorStyle = ['match', ['get', 'ProgID']];
    const defaultColor = 'black';
    Object.keys(groupedPrograms).forEach(group => {
      if (groupedPrograms[group].length === 0) return;
      goalsColorStyle.push(groupedPrograms[group]);
      if (group === 'multiple') {
        goalsColorStyle.push(defaultColor);
      }
      else {
        goalsColorStyle.push(goals.filter(g => g.filterValue === group)[0].featureColor);
      }
    });
    goalsColorStyle.push(defaultColor);

    // Add color style to each layer that can take it
    Object.values(mapbox.layers)
      .forEach(layer => {
        layer.goalStyleFields.forEach(field => {
          this.map.setPaintProperty(layer.name, field, goalsColorStyle);
        });
      });

    // Create a icon style by program ID
    const goalsIconStyle = ['match', ['get', 'ProgID']];
    const defaultMapIcon = monitoringStatuses.filter(s => s.label === 'Continuous')[0].defaultMapIcon;
    Object.keys(groupedPrograms).forEach(group => {
      if (groupedPrograms[group].length === 0) return;
      goalsIconStyle.push(groupedPrograms[group]);
      if (group === 'multiple') {
        goalsIconStyle.push(defaultMapIcon);
      }
      else {
        goalsIconStyle.push(goals.filter(g => g.filterValue === group)[0].continuousMapIcon);
      }
    });
    goalsIconStyle.push(defaultMapIcon);

    // Add icon style to continuous layer
    this.map.setLayoutProperty(mapbox.layers.monitoringPointsContinuous.name, 'icon-image', goalsIconStyle);
  }

  resetMonitoringStatusStyles() {
    if (!this.map) return;
    Object.values(mapbox.layers)
      .forEach(layer => {
        layer.goalStyleFields.forEach(field => {
          this.map.setPaintProperty(layer.name, field, initialMap.featureColor);
        });
      });

    const defaultMapIcon = monitoringStatuses.filter(s => s.label === 'Continuous')[0].defaultMapIcon;
    this.map.setLayoutProperty(mapbox.layers.monitoringPointsContinuous.name, 'icon-image', defaultMapIcon);
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
