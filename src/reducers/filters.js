const DEFAULT_STATE = {
  goals: {},
  goalClickOrder: [],
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
    case 'ADD_GOAL_FILTER':
      return Object.assign({}, state, {
        goalClickOrder: [...state.goalClickOrder, action.name]
      });
    case 'REMOVE_GOAL_FILTER':
      return Object.assign({}, state, {
        goalClickOrder: state.goalClickOrder.filter(g => g !== action.name)
      });
    default:
      return state;
  }
}

export default filters;
