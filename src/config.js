import communityEngagementActive from './img/community-engagement-active.svg';
import communityEngagementInactive from './img/community-engagement-inactive.svg';
import habitatActive from './img/habitat-active.svg';
import habitatInactive from './img/habitat-inactive.svg';
import portMaritimeActive from './img/port-maritime-active.svg';
import portMaritimeInactive from './img/port-maritime-inactive.svg';
import publicAccessActive from './img/public-access-active.svg';
import publicAccessInactive from './img/public-access-inactive.svg';
import waterQualityActive from './img/water-quality-active.svg';
import waterQualityInactive from './img/water-quality-inactive.svg';

export const organizationName = 'NY-NJ Harbor & Estuary';
export const projectName = 'Environmental Monitoring Sites';

export const hepLink = 'http://www.harborestuary.org/';
export const hrfLink = 'http://www.hudsonriver.org/';

export const mapbox = {
  accessToken: 'pk.eyJ1IjoiaHVkc29ucmYiLCJhIjoiY2ptcWsybmN0MXF5azN2bWw0emxvdmI2aSJ9.lFisgR_vLsqNOMgusrDIhA',
  layers: {
    monitoringLines: {
      name: 'monitoring-lines',
      defaultFilter: ['all'],
      goalStyleFields: ['line-color']
    },
    monitoringPointsActive: {
      name: 'monitoring-points-active',
      defaultFilter: ['all'],
      goalStyleFields: ['circle-color', 'circle-stroke-color']
    },
    monitoringPointsNonActive: {
      name: 'monitoring-points-non-active',
      defaultFilter: ['all'],
      goalStyleFields: ['circle-stroke-color']
    },
    monitoringPointsContinuous: {
      name: 'monitoring-points-continuous',
      defaultFilter: ['all', ['in', 'Legend', 'Continuous']],
      goalStyleFields: []
    },
    monitoringPolygons: {
      name: 'monitoring-polygons',
      defaultFilter: ['all'],
      goalStyleFields: ['fill-color']
    }
  },
  styleUrl: 'mapbox://styles/hudsonrf/cjms1gyqra6172smzt8x1mfg3'
};

export const initialMap = {
  center: [-73.85, 41.13],
  featureColor: '#817a6a',
  maxBounds: [
    [-75.992432,39.774769],
    [-71.488037,42.932296]
  ],
  maxZoom: 10,
  minZoom: 7,
  zoom: [8]
};

export const goals = [
  {
    name: 'Water Quality',
    featureColor: '#0072B5',
    filterValue: 'Water Quality',
    activeIcon: waterQualityActive,
    inactiveIcon: waterQualityInactive,
    tooltip: 'Reduce the sources of pollution so that the waters of the Harbor Estuary will meet the fishable/swimmable goal of the Clean Water Act.'
  },
  {
    name: 'Habitat and Ecological Health',
    featureColor: '#5CAA46',
    filterValue: 'Habitat and Ecological Health',
    activeIcon: habitatActive,
    inactiveIcon: habitatInactive,
    tooltip: 'Protect and restore the vital habitat, ecological function, and biodiversity that provide society with renewed and increased benefits.'
  },
  {
    name: 'Port and Maritime',
    featureColor: '#893684',
    filterValue: 'Port and Maritime',
    activeIcon: portMaritimeActive,
    inactiveIcon: portMaritimeInactive,
    tooltip: 'Support port and associated maritime operations so that they are both economically and ecologically viable.'
  },
  {
    name: 'Public Access',
    featureColor: '#7E4B31',
    filterValue: 'Public Access and Stewardship',
    activeIcon: publicAccessActive,
    inactiveIcon: publicAccessInactive,
    tooltip: 'Improve public access to the waters of the Estuary and the quality of experience at public spaces along the waterfront.'
  },
  {
    name: 'Community Engagement',
    featureColor: '#ED861D',
    filterValue: 'Community Engagement',
    activeIcon: communityEngagementActive,
    inactiveIcon: communityEngagementInactive,
    tooltip: 'Foster community stewardship and involvement in decisions about the Harbor Estuary.'
  }
];
