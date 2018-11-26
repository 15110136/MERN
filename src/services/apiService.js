import { Observable } from 'rxjs';
import axios from 'axios';
import config from '../config';

// const API_HOST = config.apiService.host;
const API_LOCALHOST = config.apiService.localhost;
export default class ApiService {
  static getUsers = () =>
    Observable.fromPromise(
      axios.get(`${API_LOCALHOST}/api/users`, {
        data: {},
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );

  static getNewProducts = () =>
    Observable.fromPromise(
      axios.get(`${API_LOCALHOST}/api/newProduct`, {
        data: {},
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );

  static getProducts = data =>
    Observable.fromPromise(
      axios.get(`${API_LOCALHOST}/api/productByCategory/${data}`, {
        data: {},
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );

  static getDetailProduct = data =>
    Observable.fromPromise(
      axios.get(`${API_LOCALHOST}/api/product/${data}`, {
        data: {},
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );
}
