import { logoutUser } from '../api';
import { useUserContext } from '../context/ContextProvider';
import { USER_ACTIONS } from '../types';
import { Link } from 'react-router-dom';

function Brand() {
  return (
    <Link to="/" className="text-4xl font-semibold text-light">
      Shipment Tracker
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
