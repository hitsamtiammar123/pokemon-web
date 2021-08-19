import axios from 'axios';

let BASE_URL,
  isDev = false;

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3001';
  isDev = true;
}

const api = axios.create({
  baseURL: BASE_URL,
});

if (isDev) {
  api.interceptors.request.use(
    function (config) {
      console.log('Request ==> ', config);
      return config;
    },
    function (error) {
      console.log('Request error ==>', error);
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    function (response) {
      console.log('Response ==>', response);
      return response;
    },
    function (error) {
      console.log('Response error ==>', error);
      return Promise.reject(error);
    }
  );
}
export default api;
