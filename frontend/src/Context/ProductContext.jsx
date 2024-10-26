import { createContext, useState } from "react";
import { products } from "../../public/assets/frontend_assets/assets";

export const ProductContext = createContext();
const currency ="$";
const delivery_fee = 10;


const ProductProvider = ({children})=>{
  
const [showSearch, setShowSearch] = useState(false)
  
  const values={
products, 
currency,
delivery_fee,
setShowSearch,
showSearch
  }
  return (
    <ProductContext.Provider value={values}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider;