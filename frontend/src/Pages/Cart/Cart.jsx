import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";


const Cart = () => {
  const {products, cart} = useContext(ProductContext);
  const [cartItems, setCartItems] = useState([])

  useEffect(()=>{
    const tempData = [];
    for (const items in cart) {
      for(const item in cart[items]){
        if(cart[items][item] >0){
          tempData.push({
            _id: items,
            size:item,
            quantity:cart[items][item]
          })
        }
      }
    }
    setCartItems(tempData)
  },[cart]);


  return (
    <div>
      
    </div>
  );
};

export default Cart;