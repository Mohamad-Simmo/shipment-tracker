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
    <div className="min-h-screen bg-light">
      <Navbar />
      <div className="mx-auto min-h-[calc(100vh-4rem)] max-w-6xl p-4">
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
