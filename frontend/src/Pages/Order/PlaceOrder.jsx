import React, { useContext, useState } from 'react';
import Title from '../../Components/Title';
import { ProductContext } from '../../Context/ProductContext';
import { assets } from '../../../public/assets/frontend_assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const PlaceOrder = () => {
  const { total, cart, delivery_fee, currency,setCart, token, backendUrl, products } = useContext(ProductContext);
  const [active, setActive] = useState('cash');
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });
  console.log(cart)

  const handlePlaceOrder = async () => {
    const amount = total + delivery_fee;
    const address = formValues;
    
    let orderItems = [];
    for (const productId in cart) {
      for (const size in cart[productId]) { 
        if (cart[productId][size] > 0) {
          // Find the product by productId in products array
          const itemInfo = structuredClone(products.find(product => product._id === productId));
          
          if (itemInfo) {
            itemInfo.size = size;  // Set the size property
            itemInfo.quantity = cart[productId][size];  // Set the quantity for that size
            orderItems.push(itemInfo);
          }
        }
      }
    }
    
    if (active === 'cash') {
      try {
        const res = await axios.post(backendUrl + "api/order/place", { items:orderItems, amount, address }, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
  
        if (res.data.success) {
          
          setCart([]); 
  
          navigate('/');
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };
  

  const handleActiveMethod = (name) => {
    setActive(name);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  // Check if all required fields are filled
  const isFormComplete = Object.values(formValues).every(value => value.trim() !== '');

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 md:gap-10 my-10 w-full md:items-center">
      {/* form data */}
      <div className="md:py-5 text-xl flex flex-col items-start">
        <Title text1="DELIVERY" text2="INFORMATION" />
        <div className="my-5 md:my-10">
          <div className="flex flex-col gap-3 border-gray-600">
            <div className="flex flex-col md:flex-row gap-4">
              <input onChange={handleInputChange} className="border rounded-md px-2 py-1" type="text" required placeholder="First Name" name="firstName" />
              <input onChange={handleInputChange} className="border rounded-md px-2 py-1" type="text" required placeholder="Last Name" name="lastName" />
            </div>
            <input onChange={handleInputChange} className="border rounded-md px-2 py-1" type="email" required placeholder="Email" name="email" />
            <input onChange={handleInputChange} className="border rounded-md px-2 py-1" type="text" required placeholder="Street" name="street" />
            <div className="flex flex-col md:flex-row gap-4">
              <input onChange={handleInputChange} className="border rounded-md px-2 py-1" type="text" required placeholder="City" name="city" />
              <input onChange={handleInputChange} className="border rounded-md px-2 py-1" type="text" required placeholder="State" name="state" />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input onChange={handleInputChange} className="border rounded-md px-2 py-1" type="text" required placeholder="Zipcode" name="zipcode" />
              <input onChange={handleInputChange} className="border rounded-md px-2 py-1" type="text" required placeholder="Country" name="country" />
            </div>
            <input onChange={handleInputChange} className="border rounded-md px-2 py-1" type="tel" required placeholder="Phone" name="phone" />
          </div>
        </div>
      </div>
      {/* cart total */}
      <div className="w-full">
        <div className="flex justify-start my-8 text-xl">
          <Title text1="CART" text2="TOTAL" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between border-b border-black py-1">
            <p>Subtotal</p>
            <p>{currency}{total}.00</p>
          </div>
          <div className="flex justify-between border-b-2 border-black py-1">
            <p>Delivery Fee</p>
            <p>{currency}{delivery_fee}.00</p>
          </div>
          <div className="flex justify-between font-bold">
            <p>Total</p>
            <p>{total + delivery_fee}.00</p>
          </div>
          <div className="flex gap-4">
            <div
              onClick={() => handleActiveMethod('stripe')}
              className={`flex border p-2 w-fit items-center gap-3 cursor-pointer ${active === 'stripe' ? 'border-green-600' : ''}`}
            >
              <span className={`w-5 h-5 rounded-full border ${active === 'stripe' ? 'bg-green-600' : ''}`}></span>
              <img src={assets.stripe_logo} alt="Stripe Logo" />
            </div>
            <div
              onClick={() => handleActiveMethod('cash')}
              className={`flex border p-2 w-fit items-center gap-3 cursor-pointer ${active === 'cash' ? 'border-green-600' : 'text-gray-400'}`}
            >
              <span className={`w-5 h-5 rounded-full border ${active === 'cash' ? 'bg-green-600' : ''}`}></span>
              <h4>CASH ON DELIVERY</h4>
            </div>
          </div>
          <div className="flex justify-end">
          <button 
              onClick={handlePlaceOrder}
              data-tip={!isFormComplete ? 'Please fill in all required fields' : ''}
              type="submit"
              disabled={!isFormComplete}
              className={`border py-3 px-8 my-5 ${isFormComplete ? 'bg-black text-white' : 'bg-gray-400 tooltip-bottom text-gray-700 cursor-not-allowed'}`}
            >
              Place Order
            </button>
            
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
