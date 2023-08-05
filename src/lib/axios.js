import axios from "axios";

const instance = axios.create();

// Request interceptor
instance.interceptors.request.use(
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
instance.interceptors.response.use(
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

export default instance;
