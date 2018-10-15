import { connect } from 'react-redux';
import MapboxMap from '../components/MapboxMap';
import { setClickedFeatures, setMouseOverFeatures } from '../actions';

const mapStateToProps = state => ({
  mouseOverFeatures: state.mapfeatures.mouseOverFeatures
});

const mapDispatchToProps = dispatch => ({
  setClickedFeatures: (features) => dispatch(setClickedFeatures(features)),
  setMouseOverFeatures: (features) => dispatch(setMouseOverFeatures(features))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapboxMap);
