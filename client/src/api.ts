import axios from 'axios';
import {
  Carrier,
  Customer,
  LoginInputs,
  RegisterInputs,
  Shipment,
  ShipmentInputs,
} from './types';

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

export const getCustomers = async () => {
  return (await axiosToken.get<Customer[]>('/customers')).data;
};

export const getCarriers = async () => {
  return (await axiosToken.get<Carrier[]>('/carriers')).data;
};

export const createShipment = (data: ShipmentInputs) => {
  return axiosToken.post('/shipments', data);
};

export const getShipments = async () => {
  return (await axiosToken.get<Shipment[]>('/shipments')).data;
};

export const getShipmentById = async (id: string) => {
  return (await axiosToken.get<Shipment>('/shipments/' + id)).data;
};

export const deleteShipment = (id: string) => {
  return axiosToken.delete('/shipments/' + id);
};
