import axios from 'axios';
import {API_URL} from '@env';

const axiosInstance = axios.create({
  // url de l'api
  baseURL: API_URL,
  //    withCredentials:true
});

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};
