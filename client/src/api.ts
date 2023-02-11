import axios from 'axios';
import { RegisterInputs } from './types';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    Accept: 'application/json',
  },
});

export const registerUser = (data: RegisterInputs) => {
  return axiosInstance.post('/users/register', data);
};
