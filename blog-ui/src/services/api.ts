import axios from 'axios';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((request) => {
  const access_token = localStorage.getItem('token');
  if (access_token && request.headers) {
    request.headers.Authorization = `Bearer ${access_token}`;
  }
  return request;
});

export default api;
