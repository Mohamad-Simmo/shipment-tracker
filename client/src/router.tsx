import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import AuthLayout from './components/AuthLayout';
import Register from './views/Register';
import Login from './views/Login';
import Home from './views/Home';
import ShipmentForm from './views/ShipmentForm';
import Customers from './views/Customers';
import Carriers from './views/Carriers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="shipments" />,
      },
      {
        path: 'shipments',
        element: <Home />,
      },
      {
        path: 'shipments/create',
        element: <ShipmentForm />,
      },
      {
        path: 'shipments/update/:id',
        element: <ShipmentForm />,
      },
      {
        path: 'customers',
        element: <Customers />,
      },
      {
        path: 'carriers',
        element: <Carriers />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '*',
    element: <h1>Not Found</h1>,
  },
]);

export default router;
