import { connect } from 'react-redux';
import { updateFilter } from '../actions';
import Filters from '../components/Filters';

const mapStateToProps = state => ({
  filters: state.filters,
  indicators: state.programs.indicators,
  programs: state.programs.programs,
  organizations: state.programs.organizations
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (name, value) => dispatch(updateFilter(name, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
