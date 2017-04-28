import { combineReducers } from 'redux';
import store from 'universal/modules/store/redux/store';
import storeItem from 'universal/modules/store/redux/storeItem';

export default combineReducers({
  store,
  storeItem
});
