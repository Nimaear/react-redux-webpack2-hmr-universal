import createReducer from '../../../../universal/lib/createReducer';
import merge from 'lodash/merge';
import { store } from 'universal/schemas';

const initialState = {
};

export const fetch = (data) => ({
  type: 'store/read',
  apiCall: {
    checkCache: (params, state) => {
      if (params.refetch) {
        return null;
      }
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
});

export const setEditMode = (name, editMode) => ({
  type: 'store/setEditMode',
  name,
  editMode
});

export const setSearch = (name, search) => ({
  type: 'store/setSearch',
  name,
  search
});

export const setFilter = (name, itemType) => ({
  type: 'store/setFilter',
  name,
  itemType
});

export default createReducer(initialState, {
  ['store/setEditMode']:  (state, action) => {
    const { name, editMode } = action;
    return {
      ...state,
      [name]: {
        ...state[name],
        editMode
      }
    }
  },
  ['store/setSearch']:  (state, action) => {
    const { name, search } = action;
    return {
      ...state,
      [name]: {
        ...state[name],
        search
      }
    }
  },
  ['store/setFilter']:  (state, action) => {
    const { name, itemType } = action;
    return {
      ...state,
      [name]: {
        ...state[name],
        filter: {
          itemType
        }
      }
    }
  },
  default: (state, action) => {
    if (action.entities && action.entities.store) {
      return merge({}, state, action.entities.store);
    }
    return state;
  }
})