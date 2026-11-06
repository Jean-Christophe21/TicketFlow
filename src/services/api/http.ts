import axios from 'axios';
import {API_URL,API_VERSION} from '@env';

const axiosInstance = axios.create({
  // url de l'api
  baseURL: `${API_URL}${API_VERSION}`,
  headers:{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};
