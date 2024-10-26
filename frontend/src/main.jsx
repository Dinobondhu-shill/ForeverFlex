import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './App.jsx'
import { RouterProvider} from "react-router-dom";
import ProductProvider from './Context/ProductContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
    <RouterProvider router={router} />
    </ProductProvider>
  </StrictMode>,
)
