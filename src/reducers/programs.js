import { uniqueIndicators, uniqueOrganizations } from '../models/programs';

const DEFAULT_STATE = {
  programs: [],
  loading: false
};

const programs = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_PROGRAMS':
      return Object.assign({}, state, {
        indicators: [],
        loading: true,
        organizations: [],
        programs: []
      });
    case 'RECEIVE_PROGRAMS':
      return Object.assign({}, state, {
        indicators: uniqueIndicators(action.csv),
        loading: false,
        organizations: uniqueOrganizations(action.csv),
        programs: action.csv
      });
    default:
      return state;
  }
}

export default programs;
