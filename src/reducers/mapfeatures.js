const DEFAULT_STATE = {
  mouseOverFeatures: []
};

const mapfeatures = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_MOUSE_OVER_FEATURES':
      return Object.assign({}, state, {
        mouseOverFeatures: action.mouseOverFeatures
      });
    default:
      return state;
  }
}

export default mapfeatures;
