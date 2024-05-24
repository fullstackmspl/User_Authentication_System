import axios from 'axios';
import { store } from '../index'; // Adjust the path as needed
import { setServerError } from './redux/ErrorSlice'; // Adjust the path as needed

const apiClient = axios.create({
  baseURL: config.apiBaseURL,
});

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      // network error
      store.dispatch(setServerError(true));
    } else if (error.response.status === 504) {
      // server error
      store.dispatch(setServerError(true));
    }
    return Promise.reject(error);
  }
);

export default apiClient;
