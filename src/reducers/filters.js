const DEFAULT_STATE = {
  goals: {},
  monitoringStatuses: ['active', 'continuous', 'non-active'],
  indicatorCategory: '',
  organizationName: ''
};

const filters = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return Object.assign({}, state, {
        [action.name]: action.value
      });
    default:
      return state;
  }
}

export default filters;
