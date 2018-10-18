import { combineReducers } from 'redux';
import aboutModal from './aboutModal';
import content from './content';
import filters from './filters';
import mapfeatures from './mapfeatures';
import programs from './programs';

export default combineReducers({
  aboutModal,
  content,
  filters,
  mapfeatures,
  programs
});
