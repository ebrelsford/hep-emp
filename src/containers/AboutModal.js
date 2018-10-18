import { connect } from 'react-redux';
import { hideAboutModal } from '../actions';
import AboutModal from '../components/AboutModal';

const mapStateToProps = state => ({
  content: state.content,
  visible: state.aboutModal.visible
});

const mapDispatchToProps = dispatch => ({
  hideAboutModal: () => dispatch(hideAboutModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutModal);
