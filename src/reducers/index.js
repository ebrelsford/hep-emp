import { combineReducers } from 'redux';
import aboutModal from './aboutModal';
import filters from './filters';

export default combineReducers({
  aboutModal,
  filters
});
