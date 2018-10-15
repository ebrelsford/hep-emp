import { connect } from 'react-redux';
import Popup from '../components/Popup';

const mapStateToProps = state => ({
  clickedFeatures: state.mapfeatures.clickedFeatures,
  programs: state.programs.programs
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);
