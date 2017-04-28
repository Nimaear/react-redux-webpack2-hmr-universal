import createReducer from 'universal/lib/createReducer';
import merge from 'lodash/merge';

const initialState = {
};

export const status = (data) => ({
  type: 'auth/status',
  apiCall: {
    checkCache: (params, state) => {
      if (state.auth.sessionId) {
        return state.auth;
      }
      return null;
    },
    data,
    apiMethod: 'status',
    method: 'status',
    url: 'auth'
  }
});

export default createReducer(initialState, {
  ['auth/status']: (state, action) => {
    if (action.data) {
      return {
        ...state,
        ...action.data
      };
    }
    return state;
  }
});