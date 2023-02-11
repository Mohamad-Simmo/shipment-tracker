import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useUserContext } from '../context/ContextProvider';
import { useEffect } from 'react';

function Layout() {
  const { state } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.user?.token) {
      navigate('/auth/login');
    }
  }, [state.user, navigate]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
export default Layout;
