import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "../Components/ScrollTop";


const Root = () => {
  return (
    <div className="px-4 md:12 lg:px-28 py-5">
      <ToastContainer />
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;