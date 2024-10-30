import { createContext, useState } from "react";
import { products } from "../../public/assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ProductContext = createContext();
const currency ="$";
const delivery_fee = 10;


const ProductProvider = ({children})=>{
  const [cart, setCart] = useState({});
  console.log(cart)

  const handleAddToCart = async (productId, size) =>{
    if(!size){
      toast.error("Please Select Product Size")
      return;
    }
    const cartProduct = structuredClone(cart)
    if(cartProduct[productId]){
      if(cartProduct[productId][size]){
        cartProduct[productId][size] +=1
      }
      else(
        cartProduct[productId][size] =1
      )
    }
    else{
      cartProduct[productId] ={}
      cartProduct[productId][size] = 1
  }
  setCart(cartProduct)
  }
  
const [showSearch, setShowSearch] = useState(false)
  
  const values={
products, 
currency,
delivery_fee,
setShowSearch,
showSearch,
handleAddToCart,
  }
  return (
    <ProductContext.Provider value={values}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider;