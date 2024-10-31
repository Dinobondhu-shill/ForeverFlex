import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Title from "../../Components/Title";
import { assets } from "../../../public/assets/frontend_assets/assets";


const Cart = () => {
const {products, cart, currency, updateQuantity, delivery_fee,calculateSubtotal} = useContext(ProductContext);
const [cartItems, setCartItems] = useState([]);
// const [subtotal, setSubtotal] = useState(null)

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



// useEffect(()=>{
//   calculateSubtotal()
// },[cartItems])

return (
<div>
  <div className="flex justify-start my-5 md:my-10">
    <Title text1={"YOUR"} text2={" CART"} />
  </div>
  <div>
    {
    cartItems?.map((item, index)=>{
    const productData = products.find((product)=> product._id == item._id);
    return (
    <div key={index} className="border-y py-3 my-5  flex justify-between items-center">
      <div className="flex items-center gap-6">
        <img className="w-16 md:w-20" src={productData.image[0]} alt="" />
        <div>
          <h2 className="text-xl font-medium">{productData?.name}</h2>
          <div className="flex gap-3 items-center">
            <p>{currency} {productData?.price}</p>
            <p className="px-4 py-2 border-[1px] bg-gray-100 cursor-pointer w-fit">{item.size}</p>
          </div>
        </div>
      </div>
      <input onChange={(e)=> {
         const value = Math.max(1, Number(e.target.value)); 
         updateQuantity(item._id, item.size, value);
      }} className="outline-none border w-16 text-center py-2" type="number"
        defaultValue={item.quantity} min="1" />
      <img onClick={()=>updateQuantity(item._id, item.size, 0)} className="w-7 h-7 object-cover mr-10 cursor-pointer"
      src={assets.bin_icon} alt="" />
    </div>
    )
    }
    )
    }
  </div>
  {/* checkout field */}
  <div className="flex flex-col items-end text-start mb-28">
    <div className="mr-56 my-10 text-xl"><Title text1={"CART"} text2={"TOTAL"} /></div>
    <div className="space-y-1 md:w-2/5">
      <div className="flex justify-between border-b border-black py-1">
        <p>Subtotal</p>
        <p>{currency}{calculateSubtotal(cartItems)}.00</p>
      </div>
      <div className="flex justify-between border-b-2 border-black py-1">
        <p>Delivery Fee</p>
        <p>{currency}{delivery_fee}.00</p>
      </div>
      <div className="flex justify-between font-bold">
        <p>Total</p>
        <p>{calculateSubtotal(cartItems)+delivery_fee}.00</p>
      </div>
      <div className="flex justify-end">
      <button className="border bg-black text-white py-3 px-8 my-5">Proceed to Checkout</button>
      </div>
    </div>
  </div>
</div>
);
};

export default Cart;