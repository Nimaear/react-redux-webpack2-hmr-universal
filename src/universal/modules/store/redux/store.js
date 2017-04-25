import createReducer from '../../../../universal/lib/createReducer';
import merge from 'lodash/merge';

const initialState = {
};

export default createReducer(initialState, {

  default: (state, action) => {
    if (action.entities && action.entities.questions) {
      return merge({}, state, action.entities.questions);
    }
    return state;
  }
})