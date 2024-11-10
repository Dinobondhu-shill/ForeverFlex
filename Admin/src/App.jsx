import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import AddProduct from "./Pages/AddProduct";
import ListProduct from "./Pages/ListProduct";



export const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    children:[
      {
        path:'/add-items',
        element: <AddProduct />
      },
      {
        path:'/all-products',
        element:<ListProduct />
      }
    ]
  }
])