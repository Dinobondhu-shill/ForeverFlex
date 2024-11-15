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
  const [products, setProducts] = useState([]);
  

  const handleGetProducts = async () => {
    try {
      const res = await axios.get(`${backendUrl}api/product/list`);
      setProducts(res.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  
  useEffect(()=>{
    handleGetProducts()
  },[])



  // this is the adding cart item to database
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
  if(token){
  try {
      const res = await axios.post(
        `${backendUrl}api/cart/add-cart`, 
        { itemId:productId, size }, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    if(res.data.success){
      toast.success(res.data.message)
    }
    
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
}
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
  
  const updateQuantity = async (itemId, size, quantity)=>{
    let CartData = structuredClone(cart);
    CartData[itemId][size] = quantity;
    setCart(CartData)
    if(token){
    try {
        const res = await axios.post(
          `${backendUrl}api/cart/update-cart`, 
          { itemId, size, quantity }, 
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
      if(res.data.success){
        toast.success(res.data.message)
      }
      
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }
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


// getting users cart data from database by using token
const getCartData = async (token)=>{
try {
  const res = await axios.get(
    backendUrl +"api/cart/cart-data", 
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  if(res.data.success){
    setCart(res.data.cartData)
  }
} catch (error) {
  console.log(error.message)
  toast.error(error.message)
}
}



useEffect(() => {
  if (!token && localStorage.getItem("token")) {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    getCartData(storedToken);
  }
}, [token]);

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