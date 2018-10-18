const DEFAULT_STATE = {
  content: {},
  loading: false
};

const content = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_CONTENT':
      return Object.assign({}, state, {
        content: {},
        loading: true
      });
    case 'RECEIVE_CONTENT':
      return Object.assign({}, state, {
        content: action.content,
        loading: false
      });
    default:
      return state;
  }
}

export default content;
