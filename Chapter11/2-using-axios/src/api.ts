import axios from "axios";
import type { GitHubUser } from './GitHubUser';

const api = axios.create({
  baseURL: "https://api.github.com",
});

api.interceptors.request.use((config) => {
  console.log("Request:", `${config.method?.toUpperCase()} ${config.url}`);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log("Response:", response.data);
    return response;
  },
  (error) => {
    console.error("Error:", error);
    return Promise.reject(error);
  }
);

export const getUserProfile = (username: string) => {
  return api.get<GitHubUser>(`/users/${username}`);
};

export default api;
