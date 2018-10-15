import { combineReducers } from 'redux';
import aboutModal from './aboutModal';
import filters from './filters';
import mapfeatures from './mapfeatures';
import programs from './programs';

export default combineReducers({
  aboutModal,
  filters,
  mapfeatures,
  programs
});
