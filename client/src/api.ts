import axios from 'axios';
import { LoginInputs, RegisterInputs } from './types';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: { Accept: 'application/json' },
});

export const axiosToken = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: { Accept: 'application/json' },
});

axiosToken.interceptors.request.use((config) => {
  const jsonString = localStorage.getItem('user');

  if (jsonString) {
    const user = JSON.parse(jsonString);
    const token = user.token;
    config.headers.Authorization = `Bearer ${token}` || '';
  }

  console.log(config);

  return config;
});

export const registerUser = (data: RegisterInputs) => {
  return axiosInstance.post('/users/register', data);
};

export const loginUser = (data: LoginInputs) => {
  return axiosInstance.post('/users/login', data);
};

export const logoutUser = () => {
  return axiosToken.delete('/users/logout');
};
