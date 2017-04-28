import createReducer from '../../../../universal/lib/createReducer';
import merge from 'lodash/merge';
import { store } from 'universal/schemas';

const initialState = {
};

export const fetch = (data) => {
  return {
    type: 'store/read',
    apiCall: {
      checkCache: (params, state) => {
        if (state.entities.store[params.name]) {
          return state.entities.store[params.name];
        }
        return null;
      },
      schema: store,
      data,
      method: 'read',
      url: 'store'
    }
  };
}

export const clear = () => {
  return {
    type: 'store/clear',
  };
}


export default createReducer(initialState, {
  ['store/clear']: (state, action) => {
    return {
    }
  },
  default: (state, action) => {
    if (action.entities && action.entities.store) {
      return merge({}, state, action.entities.store);
    }
    return state;
  }
})