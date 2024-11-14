import addIcon from '../assets/add_icon.png';
import listIcon from '../assets/order_icon.png';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="w-20 lg:w-48 h-screen border-r py-8 space-y-5">
      <NavLink to={'/add-items'} className="flex gap-3 items-center border-y border-l px-3 py-2">
        <img src={addIcon} alt="Add" className="w-6 h-6" />
        <span className="hidden md:block">Add Items</span>
      </NavLink>
      <NavLink to={'/all-products'} className="flex gap-3 items-center border-y border-l px-3 py-2">
        <img src={listIcon} alt="List" className="w-6 h-6" />
        <span className="hidden md:block">List Items</span>
      </NavLink>
      <NavLink to={'/orders'} className="flex gap-3 items-center border-y border-l px-3 py-2">
        <img src={listIcon} alt="Orders" className="w-6 h-6" />
        <span className="hidden md:block">Orders</span>
      </NavLink>
    </div>
  );
};

export default SideNav;
