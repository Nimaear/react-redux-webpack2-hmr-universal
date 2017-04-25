import api from './api';

export default function apiMiddleware (store) {

  return next => action => {
    const { apiCall, checkCache, type, ...rest } = action;

    if (!apiCall) return next(action);

    if (checkCache) {
      const cachedResponse = checkCache(store.getState());
      if (cachedResponse) {
        return new Promise((resolve) => {
          resolve(cachedResponse);
        }).then(response => {
          next({ ...rest, ...response, type });
          return {
            error: false,
            response
          };
        })
      }
    }

    next({ ...rest, type: type + '/request' });
    return apiCall(api)
      .then(res => {
        const { response, message } = res;
        if (response.entities) {
          next({ ...rest, ...response, type });
        } else {
          next({ ...rest, response, type });
        }
        return {
          error: false,
          message,
          response,
        };
      })
      .catch(res => {
        next({ ...rest, res, type: type + '/fail' });
        return {
          error: res.error || true,
          message: res.message,
        }
      });

  };
}