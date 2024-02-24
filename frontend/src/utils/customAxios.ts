import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_URL, // 기본 서버 주소 입력
  timeout: 3000,
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
