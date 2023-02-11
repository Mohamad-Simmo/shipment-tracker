import { logoutUser } from '../api';
import { useUserContext } from '../context/ContextProvider';
import { USER_ACTIONS } from '../types';
import { Link } from 'react-router-dom';
import { SiLinuxcontainers } from 'react-icons/si';

function Brand() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-3xl font-semibold text-white"
    >
      <span>
        <SiLinuxcontainers />
      </span>
      <span className="hidden sm:block">Shipment Tracker</span>
    </Link>
  );
}

function Navbar() {
  const { dispatch } = useUserContext();

  const logout = () => {
    logoutUser().then(() => {
      dispatch({
        type: USER_ACTIONS.LOGOUT,
      });
    });
  };
  return (
    <div className="flex h-16 items-center justify-between bg-primary px-8">
      <Brand />
      <button
        onClick={logout}
        className="font-semibold text-light hover:underline"
      >
        Logout
      </button>
    </div>
  );
}
export default Navbar;
