import createReducer from '../../../../universal/lib/createReducer';
import merge from 'lodash/merge';
import { store } from 'universal/schemas';

const initialState = {
};

export default createReducer(initialState, {
  default: (state, action) => {
    if (action.entities && action.entities.storeItem) {
      return merge({}, state, action.entities.storeItem);
    }
    return state;
  }
})