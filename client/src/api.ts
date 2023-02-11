import axios from 'axios';
import { LoginInputs, RegisterInputs } from './types';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    Accept: 'application/json',
  },
});

export const registerUser = (data: RegisterInputs) => {
  return axiosInstance.post('/users/register', data);
};

export const loginUser = (data: LoginInputs) => {
  return axiosInstance.post('/users/login', data);
};
