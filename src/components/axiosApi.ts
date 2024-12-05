import axios from "axios";

const apiAxios = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/",
});

// apiAxios.interceptors.request.use((config) => {
//   const token = process.env.EXPO_PUBLIC_API_KEY;
//   if (token) {
//     const params = new URLSearchParams(config.params || {});
//     params.append("appid", token);
//     config.params = params;
//   }
//   return config;
// });

apiAxios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error.response) {
      const status = error.response.status;
      if (status >= 200 && status < 600) {
        return Promise.resolve(error.response);
      }
    }
    return Promise.reject(error);
  },
);

export default apiAxios;
