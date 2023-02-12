import { NavLink } from 'react-router-dom';
import { HiArrowCircleRight, HiArrowCircleLeft } from 'react-icons/hi';

function SidebarLink({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        (isActive ? 'bg-primary' : 'hover:bg-primary/30') +
        ' mr-6 ml-3 block rounded-lg p-3 font-semibold text-white duration-200'
      }
    >
      {children}
    </NavLink>
  );
}

function Sidebar({
  toggleSidebar,
  isSidebarShown,
}: {
  toggleSidebar: () => void;
  isSidebarShown: boolean;
}) {
  return (
    <div
      className={`fixed h-full w-52 bg-dark duration-500 ${
        isSidebarShown ? 'translate-x-0' : '-translate-x-[calc(100%-1rem)]'
      }`}
    >
      <button onClick={toggleSidebar} className="absolute -right-3.5 top-3">
        {isSidebarShown ? (
          <HiArrowCircleLeft className="h-7 w-7 rounded-full bg-dark text-primary" />
        ) : (
          <HiArrowCircleRight className="h-7 w-7 rounded-full bg-dark text-primary" />
        )}
      </button>
      <ul className="my-3 mt-7 flex flex-col gap-2">
        <li>
          <SidebarLink link="/shipments">Shipments</SidebarLink>
        </li>
        <li>
          <SidebarLink link="/customers">Customers</SidebarLink>
        </li>
        <li>
          <SidebarLink link="/carriers">Carriers</SidebarLink>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
