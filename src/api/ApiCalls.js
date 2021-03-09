import axios from "axios";
import {
  getFromLocalStorage,
  removeAllFromLocalStorage,
} from "../Helpers/Helpers";
import { API_URL } from "../main";

export let axiosInstances = {};

/*
 * create axios instance
 */
let instance = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

/*
 * handle request interceptor
 */
instance.interceptors.request.use(
  (config) => handleConfig(config),
  (error) => Promise.reject(error)
);

/*
 * handle response interceptor
 */
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      logout();
    } else {
      return Promise.reject(error);
    }
  }
);

/*
 * assign correspondance instance
 */
axiosInstances["api"] = instance;

/*
 * logput on getting status 401 from any api
 */
const logout = () => {
  removeAllFromLocalStorage();
  window.location.replace("/");
};

/**
 * handle config for get/post
 */
const handleConfig = (config) => {
  const token = getFromLocalStorage("token");
  if (token) {
    config.headers["authorization"] = `${token}`;
  }
  return config;
};
