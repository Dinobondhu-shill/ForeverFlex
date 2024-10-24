import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";


const Root = () => {
  return (
    <div className="px-4 md:12 lg:px-28 py-5">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;