import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8081/indentity',
  httpsAgent: false,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

axiosClient.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response.status === 401) {
      // TODO: handle 401 error
    }

    if (error.response.status === 403) {
      // TODO: handle 403 error
    }

    if (error.response.status === 404) {
      // TODO: handle 404 error ( not found )
    }
    return Promise.reject(error);
  }
);

axiosClient.interceptors.request.use(
  (config) => {
    // let authentication = localStorage.getItem('authentication');
    // authentication = JSON.parse(authentication || '');
    // const { token } = authentication;

    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosClient;
