import { connect } from 'react-redux';
import {
  addGoalFilter,
  removeGoalFilter,
  scrollToModalSection,
  showAboutModal,
  showAboutModalTab,
  updateFilter
} from '../actions';
import Filters from '../components/Filters';

const mapStateToProps = state => ({
  filters: state.filters,
  indicators: state.programs.indicators,
  programs: state.programs.programs,
  organizations: state.programs.organizations
});

const mapDispatchToProps = dispatch => ({
  addGoalFilter: (name) => dispatch(addGoalFilter(name)),
  removeGoalFilter: (name) => dispatch(removeGoalFilter(name)),
  scrollToModalSection: (name) => dispatch(scrollToModalSection(name)),
  showAboutModal: () => dispatch(showAboutModal()),
  showAboutModalTab: (index) => dispatch(showAboutModalTab(index)),
  updateFilter: (name, value) => dispatch(updateFilter(name, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
