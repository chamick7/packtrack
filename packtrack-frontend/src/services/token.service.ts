import axiosApiInstance from "../utils/axios";
import jwt_decode from "jwt-decode";

export const storeAccessToken = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : null;
};

export const storeRefreshToken = (accessToken: string) => {
  localStorage.setItem("refreshToken", accessToken);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem("refreshToken") ? localStorage.getItem("refreshToken") : null;
};

export const refreshAccessToken = async (): Promise<string | null> => {
  const response = await axiosApiInstance.post<{
    accessToken: string;
  }>("/api/auth/refresh", {
    refreshToken: getRefreshToken(),
  });
  if (response.data) {
    storeRefreshToken(response.data.accessToken);
    return response.data.accessToken;
  }
  return null;
};

export const clearAuthToken = () => {
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("accessToken");
};

export const decodeToken = (token: string) => jwt_decode(token);
