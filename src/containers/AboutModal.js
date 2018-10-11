import { connect } from 'react-redux';
import { hideAboutModal } from '../actions';
import AboutModal from '../components/AboutModal';

const mapStateToProps = state => ({
  visible: state.aboutModal.visible
});

const mapDispatchToProps = dispatch => ({
  hideAboutModal: () => dispatch(hideAboutModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutModal);
