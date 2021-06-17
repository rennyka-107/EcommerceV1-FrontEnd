import { BASE_URL } from "../Constant";

const axios = require("axios");
const queryString = require("query-string");

const axiosClient = axios.create({
  baseURL: BASE_URL + "/api/",
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.defaults.timeout = 3000;

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const user = localStorage.getItem("user");
    if (user) {
      const { token } = JSON.parse(user);
      config.headers.Authorization = "Bear " + token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
