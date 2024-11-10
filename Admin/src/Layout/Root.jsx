
import { useState } from 'react';
import Nav from '../Components/Nav';
import SideNav from '../Components/SideNav';
import { Outlet } from 'react-router-dom';
import Login from '../Pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const BackendUrl = import.meta.env.VITE_BACKEND_URL



const Root = () => {
const [token, setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):"")
  return (
    !token ? <Login setToken={setToken}/> : <div>
      <ToastContainer />
    <Nav setToken={setToken}/>
    <div className='px-3 md:px-10 gap-16 flex'>
      <SideNav />
      <Outlet />
    </div>
    
  </div>
  );
};

export default Root;