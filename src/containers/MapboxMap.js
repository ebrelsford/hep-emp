import { connect } from 'react-redux';
import MapboxMap from '../components/MapboxMap';
import { setMouseOverFeatures } from '../actions';

const mapStateToProps = state => ({
  mouseOverFeatures: state.mapfeatures.mouseOverFeatures
});

const mapDispatchToProps = dispatch => ({
  setMouseOverFeatures: (features) => dispatch(setMouseOverFeatures(features))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapboxMap);
