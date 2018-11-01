const DEFAULT_STATE = {
  tabIndex: 0,
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
    case 'SHOW_ABOUT_MODAL_TAB':
      return Object.assign({}, state, {
        tabIndex: action.index
      });
    default:
      return state;
  }
}

export default aboutModal;
