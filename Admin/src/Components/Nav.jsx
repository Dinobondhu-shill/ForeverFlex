
import logo from '../assets/logo.png'

const Nav = () => {
  return (
    <div className='flex justify-between items-center h-15 border-b px-3 py-1 md:px-10 md:py-3'>
      <img src={logo} className='w-36'  />
      <button className='px-4 py-2 rounded-3xl bg-gray-800 text-white'>Logout</button>
    </div>
  );
};

export default Nav;