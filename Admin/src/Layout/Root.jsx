
import { useState } from 'react';
import Nav from '../Components/Nav';
import SideNav from '../Components/SideNav';
import { Outlet } from 'react-router-dom';
import Login from '../Pages/Login';

const Root = () => {
const [token, setToken] = useState('')

  return (
    !token ? <Login/> : <div>
    <Nav />
    <div className='px-3 md:px-10 gap-16 flex'>
      <SideNav />
      <Outlet />
    </div>
    
  </div>
  );
};

export default Root;