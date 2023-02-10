import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="grid h-screen w-screen place-items-center overflow-hidden bg-slate-700 bg-gradient-to-r">
      <div className="w-[350px] rounded-lg border bg-white px-8 py-12">
        <Outlet />
      </div>
    </div>
  );
}
export default AuthLayout;
