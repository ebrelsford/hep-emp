const DEFAULT_STATE = {
  mouseOverFeatures: []
};

const mapfeatures = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_CLICKED_FEATURES':
      return Object.assign({}, state, {
        clickedFeatures: action.clickedFeatures
      });
    case 'SET_MOUSE_OVER_FEATURES':
      return Object.assign({}, state, {
        mouseOverFeatures: action.mouseOverFeatures
      });
    default:
      return state;
  }
}

export default mapfeatures;
