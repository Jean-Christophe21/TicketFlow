import axios from 'axios';
import {API_URL,API_VERSION} from '@env';

const axiosInstance = axios.create({
  // url de l'api
  baseURL: API_URL+API_VERSION,
  //    withCredentials:true
});

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};
