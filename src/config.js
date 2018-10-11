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
  styleUrl: 'mapbox://styles/hudsonrf/cjms1gyqra6172smzt8x1mfg3'
};

export const initialMap = {
  center: [-73.85, 41.13],
  maxBounds: [
    [-75.992432,39.774769],
    [-71.488037,42.932296]
  ],
  zoom: 8
};

export const goals = [
  {
    name: 'Water Quality',
    activeIcon: waterQualityActive,
    inactiveIcon: waterQualityInactive
  },
  {
    name: 'Habitat and Ecological Health',
    activeIcon: habitatActive,
    inactiveIcon: habitatInactive
  },
  {
    name: 'Port and Maritime',
    activeIcon: portMaritimeActive,
    inactiveIcon: portMaritimeInactive
  },
  {
    name: 'Public Access',
    activeIcon: publicAccessActive,
    inactiveIcon: publicAccessInactive
  },
  {
    name: 'Community Engagement',
    activeIcon: communityEngagementActive,
    inactiveIcon: communityEngagementInactive
  }
];
