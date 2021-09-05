import axios from "axios";

const baseURL = "http://localhost:3000/api";
let headers = {};

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: headers,
});

export default axiosInstance;
