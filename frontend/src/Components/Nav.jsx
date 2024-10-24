import { NavLink } from 'react-router-dom';
import { assets } from '../../public/assets/frontend_assets/assets'
import { useState } from 'react';


const Nav = () => {
  const [visible, setVisible] = useState(false)


  return (
    <div className='flex justify-between gap-1 items-center'>
     <img src={assets.logo} alt="logo" className='w-36' />
     <div className='hidden md:flex gap-4'>
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
     {/* last group */}
     <div className='flex gap-6 items-center'>
      <div className='w-[1.25rem] cursor-pointer'>
        <img src={assets.search_icon} alt="" />
      </div >
      <div className='w-[1.25rem] cursor-pointer'>
        <img src={assets.profile_icon} alt="" />
      </div>
      <div className='w-[1.25rem] cursor-pointer'>
        <img src={assets.cart_icon} alt="" />
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