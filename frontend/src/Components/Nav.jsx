import { NavLink } from 'react-router-dom';
import { assets } from '../../public/assets/frontend_assets/assets'


const Nav = () => {
  return (
    <div className='flex justify-between gap-1 items-center'>
     <img src={assets.logo} alt="logo" className='w-36' />
     <div className='flex gap-4'>
      <NavLink to={'/'} className='flex flex-col items-center justify-center gap-1 '>
      <p>HOME</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 '/>
      </NavLink>
      <NavLink to={'/collection'} className='flex flex-col items-center justify-center gap-1'>
      <p>COLLECTIONS</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
      </NavLink>
      <NavLink to={'/about'} className='flex flex-col items-center justify-center gap-1'>
      <p>ABOUT</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
      </NavLink>
      <NavLink to={'/contact'} className='flex flex-col items-center justify-center gap-1'>
      <p>CONTACTS</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
      </NavLink>
     </div>
    </div>
  );
};

export default Nav;