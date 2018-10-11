const DEFAULT_STATE = {
  visible: false
};

const aboutModal = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'HIDE_ABOUT_MODAL':
      return Object.assign({}, state, {
        visible: false
      });
    case 'SHOW_ABOUT_MODAL':
      return Object.assign({}, state, {
        visible: true
      });
    default:
      return state;
  }
}

export default aboutModal;
