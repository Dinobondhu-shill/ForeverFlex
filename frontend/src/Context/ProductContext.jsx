import { createContext } from "react";
import { products } from "../../public/assets/frontend_assets/assets";

export const ProductContext = createContext();
const currency ="$";
const delivery_fee = 10;


const ProductProvider = ({children})=>{
  
  const values={
products, 
currency,
delivery_fee
  }
  return (
    <ProductContext.Provider value={values}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider;