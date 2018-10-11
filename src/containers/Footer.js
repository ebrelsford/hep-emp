import { connect } from 'react-redux';
import { showAboutModal } from '../actions';
import Footer from '../components/Footer';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  showAboutModal: () => dispatch(showAboutModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
