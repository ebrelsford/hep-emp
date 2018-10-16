import {
  cleanPrograms,
  uniqueIndicators,
  uniqueOrganizations
} from '../models/programs';

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
      const programs = cleanPrograms(action.csv);
      return Object.assign({}, state, {
        indicators: uniqueIndicators(programs),
        loading: false,
        organizations: uniqueOrganizations(programs),
        programs
      });
    default:
      return state;
  }
}

export default programs;
