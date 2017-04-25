import axios from 'axios';
import config from '../config';

const { version, host, route, protocol } = config.api;

const API_URL = `${protocol}://${host}/${route}`;

class API {
  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
      timeout: 3000,
    });

    this.get = this.createMethod('get');
    this.delete = this.createMethod('delete');
    this.put = this.createMethod('put');
    this.post = this.createMethod('post');
  }

  createMethod(method) {
    return (url, data) => {
      return new Promise((resolve, reject) => {
        this.axios[method](url, data).then( res => {
          const { response } = response;
          resolve({
            error: false,
            message: res.data && res.data.message,
            response
          });
        })
        .catch(res => {
          reject({
            error: res.data && res.data.error || true,
            message: res.data && res.data.message,
          });
        });
      });
    };
  }

}

const api = new API();

export default api;