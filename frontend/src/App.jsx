import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection/Collection";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Register/Login";
import SignUp from "./Pages/Register/SignUp";

   export const router = createBrowserRouter([
      {
        path: "/",
        element: <Root />,
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
        ]
      },
    ]);

