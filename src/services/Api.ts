import axios from "axios";
import urls from "./urls";
import { getToken } from "@/contexts/auth/AuthContext";

const Api = axios.create({
  baseURL: urls.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.request.use(
  async (config) => {
    const token = await getToken();

    console.log("token", token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;
      if (status >= 200 && status < 600) {
        return Promise.resolve(error.response);
      }
    }
    return Promise.reject(error);
  },
);

export default Api;
