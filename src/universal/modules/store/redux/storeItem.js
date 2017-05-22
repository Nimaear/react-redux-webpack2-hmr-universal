import createReducer from '../../../../universal/lib/createReducer';
import merge from 'lodash/merge';
import { storeItem } from 'universal/schemas';

const initialState = {
};

export const fetchItem = (data) => ({
  type: 'store/fetchItem',
  apiCall: {
    // checkCache: (params, state) => {
    //   if (params.refetch) {
    //     return null;
    //   }
    //   const id = `${params.type}-${params.id}`;
    //   if (state.entities.storeItem[id] && state.entities.storeItem[id].toc) {
    //     return state.entities.storeItem[id];
    //   }
    //   return null;
    // },
    schema: storeItem,
    data,
    url: 'store',
    method: 'findById',
  }
});


export const fetchToc = (data) => ({
  type: 'store/fetchToc',
  courseId: data.courseId,
  apiCall: {
    // schema: storeItem,
    data,
    url: 'guest',
    method: 'getCourseToc',
  }
});

export const fetchItemWithToc = (data) => {
  return dispatch => {
    dispatch(fetchItem(data)).then(res => {
      const { error, response } = res;
      if (error) {
        dispatch({ res, type: 'store/fetchItemWithToc/fail' })
        throw error;
      }
      if (parseInt(data.type, 10) === 1) {
        const courseId = parseInt(data.id, 10);
        dispatch(fetchToc({ courseId }));
      }
    }, error => {
        dispatch({ res, type: 'store/fetchItemWithToc/fail' })
        throw error;
      }
    ).catch(error => {
      dispatch({ res, type: 'store/fetchItemWithToc/fail' })
      throw error;
    });
  }
}

export default createReducer(initialState, {
  ['store/fetchToc']:  (state, action) => {
    const id = `1-${action.courseId}`;
    return {
      ...state,
      [id]: {
        ...state[id],
        toc: action.data
      }
    }
    return state;
  },
  default: (state, action) => {
    if (action.entities && action.entities.storeItem) {
      return merge({}, state, action.entities.storeItem);
    }
    return state;
  }
})