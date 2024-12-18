import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection/Collection";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Register/Login";
import SignUp from "./Pages/Register/SignUp";
import ProductDetails from "./Pages/Collection/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/Order/PlaceOrder";
import Myorder from "./Pages/Order/Myorder";
import Verify from "./Pages/verifyStripe/Verify";
import Error from "./Pages/Error";

   export const router = createBrowserRouter([
      {
        path: "/",
        element: <Root />,
        errorElement:<Error />,
        children: [
          {
            path:'/',
            element:<Home />
          },
          {
            path: '/collections',
            element: <Collection />
          },
          {
            path:'/product/:productId',
            element:<ProductDetails />
          },
          {
            path: '/about',
            element:<About />
          },
          {
            path:'/contact',
            element:<Contact />
          },
          {
            path:'/login',
            element: <Login />
          },
          {
            path: '/register',
            element: <SignUp />
          },
          {
            path:'/cart',
            element: <Cart />
          },
          {
            path:'/place-order',
            element: <PlaceOrder />
          },
          {
            path: '/my-orders',
            element: <Myorder />
          },
          {
            path:'/verify',
            element:<Verify />
          },
          
        ]
      },
    ]);

