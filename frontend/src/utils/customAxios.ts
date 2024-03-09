import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

// const host =
//   window.location.hostname === 'localhost'
//     ? import.meta.env.VITE_CLIENT_URL
//     : import.meta.env.VITE_CLIENT_URL_PROXY;

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {},
  withCredentials: true,
});

api.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> => {
    return config;
  },
  (error) => {
    console.log(error);
    alert(error.response?.data.message);
    throw error;
  },
);

export { api };
