import { createContext, useState } from "react";
import { products } from "../../public/assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ProductContext = createContext();
const currency ="$";
const delivery_fee = 10;


const ProductProvider = ({children})=>{
  const [cart, setCart] = useState({});  
  const [showSearch, setShowSearch] = useState(false)

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

  const cartCount = () => {
    let totalCount = 0;
  
    for (const productId in cart) {
      for (const size in cart[productId]) {
        if (cart[productId][size] > 0) {
          totalCount += cart[productId][size];
        }
      }
    }
  
    return totalCount;
  };
  
  const updateQuantity = (itemId, size, quantity)=>{
    let CartData = structuredClone(cart);
    CartData[itemId][size] = quantity;
    setCart(CartData)
  }
  const values={
products, 
currency,
delivery_fee,
setShowSearch,
showSearch,
handleAddToCart,
cartCount,
cart, updateQuantity
  }
  return (
    <ProductContext.Provider value={values}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider;