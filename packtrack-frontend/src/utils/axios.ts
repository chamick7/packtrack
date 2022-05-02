import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {
  clearAuthToken,
  getAccessToken,
  refreshAccessToken,
} from "../services/token.service";

export const BASE_URL = "http://api.packtrack.chamick7.com";

const axiosApiInstance = axios.create({
  baseURL: BASE_URL,
});

axiosApiInstance.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<AxiosRequestConfig | Error> => {
    const accessToken = getAccessToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    };
    return config;
  }
);

axiosApiInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // when access token expired
    if (
      error.response.status === 401 &&
      String(originalRequest.url) !== "/api/auth/refresh" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const result = await refreshAccessToken();

        if (!result) {
          clearAuthToken();
          window.location.href = "/login";
          return Promise.reject(error);
        }

        return axiosApiInstance(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosApiInstance;
