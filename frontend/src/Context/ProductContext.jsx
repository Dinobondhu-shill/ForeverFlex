import { createContext, useEffect, useState } from "react";
// import { products } from "../../public/assets/frontend_assets/assets";
import { toast } from "react-toastify";
import axios from 'axios'

export const ProductContext = createContext();
const currency ="$";
const delivery_fee = 10;
const backendUrl = import.meta.env.VITE_BACKEND_URL;



const ProductProvider = ({children})=>{
  const [cart, setCart] = useState({});  
  const [showSearch, setShowSearch] = useState(false);
  const [total, setTotal] = useState(null)
  const [token, setToken] = useState('')
  const [products, setProducts] = useState([])
console.log(products)
const handleGetProducts =async ()=>{
  const res = await axios.get(backendUrl + "api/product/list")
  setProducts(res.data.products)
}

  useEffect(()=>{
    handleGetProducts()
  },[])

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
  const calculateSubtotal = (cartItems) => {
    let subtotal = 0;
  
    cartItems?.forEach((item) => {
      const productData = products.find((product) => product._id === item._id);
  
      if (productData) {
        subtotal += productData.price * item.quantity;
      }
    });
  setTotal(subtotal)
 return subtotal
  };

  useEffect(()=>{
    if(!token && localStorage.getItem("token")){
      setToken(localStorage.getItem('token'))
    }
  },[token])

  const values={
products, 
currency,
delivery_fee,
setShowSearch,
showSearch,
handleAddToCart,
cartCount,
cart, updateQuantity, calculateSubtotal, total, backendUrl, token, setToken, setCart
  }
  return (
    <ProductContext.Provider value={values}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider;