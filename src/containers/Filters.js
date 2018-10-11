import { connect } from 'react-redux';
import { updateFilter } from '../actions';
import Filters from '../components/Filters';

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (name, value) => dispatch(updateFilter(name, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
