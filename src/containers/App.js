import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  aboutModal: state.aboutModal
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
