import { Outlet, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/ContextProvider';
import { useEffect } from 'react';

function AuthLayout() {
  const { state } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.user?.token) {
      navigate('/');
    }
  }, [state.user, navigate]);

  return (
    <div className="grid h-screen w-screen place-items-center overflow-hidden bg-slate-700 bg-gradient-to-r">
      <div className="w-[350px] rounded-lg border bg-white px-8 py-12">
        <Outlet />
      </div>
    </div>
  );
}
export default AuthLayout;
