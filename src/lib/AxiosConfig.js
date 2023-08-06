import axios from "axios";

const Axios = axios.create();

// Request interceptor
Axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log("Request Interceptor:", config);
    return config;
  },
  function (error) {
    // Do something with request error
    // console.log("Request Error Interceptor:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
Axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    // console.log("Response Interceptor:", response);
    return response;
  },
  function (error) {
    // Do something with response error
    // console.log("Response Error Interceptor:", error);
    return Promise.reject(error);
  }
);

export default Axios;
