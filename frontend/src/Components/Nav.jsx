import { NavLink } from 'react-router-dom';
import { assets } from '../../public/assets/frontend_assets/assets'
import { useState } from 'react';


const Nav = () => {
  const [visible, setVisible] = useState(false);
  const [dropdown, setDropdown] = useState(false);
 



  return (
    <div className='flex justify-between gap-1 items-center border-b pb-4'>
     <img src={assets.logo} alt="logo" className='w-36' />
     <div className='hidden md:flex gap-4'>
      <NavLink to={'/'} className='flex flex-col items-center justify-center gap-1 '>
      <p>HOME</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
      </NavLink>
      <NavLink to={'/collections'} className='flex flex-col items-center justify-center gap-1'>
      <p>COLLECTIONS</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
      </NavLink>
      <NavLink to={'/about'} className='flex flex-col items-center justify-center  gap-1'>
      <p>ABOUT</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
      </NavLink>
      <NavLink to={'/contact'} className='flex flex-col items-center justify-center  gap-1'>
      <p>CONTACTS</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
      </NavLink>
     </div>
     {/* last group */}
     <div className='flex gap-6 items-center'>
      <div className='w-[1.25rem] cursor-pointer'>
        <img src={assets.search_icon} alt="" />
      </div >
      <div onClick={()=> setDropdown(!dropdown)} className='w-[1.25rem] cursor-pointer '>
        <div  className='relative'>
        <img src={assets.profile_icon} alt="" />
        {
          dropdown && <ul className='flex flex-col gap-3 bg-slate-100 px-6 py-3 rounded-lg absolute top-6 -right-20 shadow-md'>
          <NavLink to={'/profile'}>Profile</NavLink>
          <NavLink to={'/profile'}>Orders</NavLink>
          <button>Logout</button>
        </ul>
        }
        </div>
        
      </div>
      <div className='w-[1.25rem] cursor-pointer relative'>
        <img src={assets.cart_icon} alt="" />
        <span className='w-4 h-4 border rounded-full absolute -top-3 -right-2 flex justify-center items-center bg-black text-white text-sm'>2 </span>
      </div>
     </div>
     <div onClick={()=> setVisible(true)} className='md:hidden w-[1.25rem]'>
     <img src={assets.menu_icon} />
     </div>
     {
      visible ? <div className='w-full h-full bg-white absolute top-0 right-0'> 
      <div onClick={()=>setVisible(false)}>
        <img src={assets.cross_icon} className='py-3 px-3' />
      </div>
      <ul className='flex flex-col gap-5 text-xl justify-center w-full items-center '>
        <NavLink onClick={()=>setVisible(false)} to={'/'} className='w-full text-center'>HOME
        <hr className='w-full border-none h-[1.5px] bg-gray-700 '/></NavLink>
        <NavLink onClick={()=>setVisible(false)} className='w-full text-center' to={'/collections'}>COLLECTIONS
        <hr className='w-full border-none h-[1.5px] bg-gray-700 '/>
        </NavLink>
        <NavLink onClick={()=>setVisible(false)} className='w-full text-center' to={'/about'}>ABOUT
        <hr className='w-full border-none h-[1.5px] bg-gray-700 '/>
        </NavLink>
        <NavLink onClick={()=>setVisible(false)} className='w-full text-center' to={'/contact'}>CONTACTS
        <hr className='w-full border-none h-[1.5px] bg-gray-700 '/></NavLink>
      </ul>
      </div> : null
     }

    </div>
  );
};

export default Nav;