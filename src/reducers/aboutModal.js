const DEFAULT_STATE = {
  tabIndex: 1,
  tabScrollSection: null,
  visible: true
};

const aboutModal = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'HIDE_ABOUT_MODAL':
      return Object.assign({}, state, {
        tabScrollSection: null,
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
    case 'SCROLL_TO_MODAL_SECTION':
      return Object.assign({}, state, {
        tabScrollSection: action.tabScrollSection
      });
    default:
      return state;
  }
}

export default aboutModal;
