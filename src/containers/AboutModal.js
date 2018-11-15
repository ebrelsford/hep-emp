import { connect } from 'react-redux';
import { hideAboutModal, showAboutModalTab } from '../actions';
import AboutModal from '../components/AboutModal';

const mapStateToProps = state => ({
  content: state.content,
  tabIndex: state.aboutModal.tabIndex,
  tabScrollSection: state.aboutModal.tabScrollSection,
  visible: state.aboutModal.visible
});

const mapDispatchToProps = dispatch => ({
  hideAboutModal: () => dispatch(hideAboutModal()),
  showAboutModalTab: (index) => dispatch(showAboutModalTab(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutModal);
