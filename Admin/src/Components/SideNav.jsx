import addIcon from '../assets/add_icon.png'
import listIcon from '../assets/order_icon.png'
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className='w-48 h-screen border-r py-8 space-y-5'>
      <NavLink to={'/add-items'} className="flex gap-3 border-y border-l px-3 py-2"><img src={addIcon} alt="" /> Add Items</NavLink>
      <NavLink to={'/all-products'} className="flex gap-3 border-y border-l px-3 py-2"><img src={listIcon} alt="" /> List Items</NavLink>
      <NavLink to={'/orders'} className="flex gap-3 border-y border-l px-3 py-2"><img src={listIcon} alt="" /> Orders</NavLink>
    </div>
  );
};

export default SideNav;