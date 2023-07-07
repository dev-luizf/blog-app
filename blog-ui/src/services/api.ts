import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: `${API_BASE_URL}`,
});

api.interceptors.request.use((request) => {
  const access_token = localStorage.getItem("token");
  if (access_token && request.headers) {
    request.headers.Authorization = `Bearer ${access_token}`;
  }
  return request;
});

export default api;
