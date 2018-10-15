import { connect } from 'react-redux';
import App from '../components/App';
import { fetchPrograms } from '../actions';

const mapStateToProps = state => ({
  aboutModal: state.aboutModal
});

const mapDispatchToProps = dispatch => ({
  fetchPrograms: () => dispatch(fetchPrograms())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
