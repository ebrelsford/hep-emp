import { connect } from 'react-redux';
import App from '../components/App';
import { fetchContent, fetchPrograms } from '../actions';

const mapStateToProps = state => ({
  aboutModal: state.aboutModal
});

const mapDispatchToProps = dispatch => ({
  fetchContent: () => dispatch(fetchContent()),
  fetchPrograms: () => dispatch(fetchPrograms())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
