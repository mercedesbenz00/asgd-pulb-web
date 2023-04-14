import axios from "axios";
const API_URL = process.env.REACT_APP_API_BASE;
export const axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

const instance = axios.create({
  baseURL: API_URL,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export const API_VERSION = "v1";
export default instance;
