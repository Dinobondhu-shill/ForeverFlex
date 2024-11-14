import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Verify = () => {

  const {token, setCart, backendUrl} = useContext(ProductContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const success = searchParams.get("success");
  const orderId = searchParams.get('orderId')


  const verifyPayment = async () =>{
    if(!token){
      return null
    }
    else{
      const res = await axios.post(backendUrl + "api/order/verifyStripe", {orderId, success }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if(res.data.success){
        setCart({})
        navigate('/my-orders')
      }
    }
  }

  useEffect(()=>{
    verifyPayment()
  },[token])


  return (
    <div className='flex flex-col justify-center items-center w-full h-screen text-center text-3xl'>
      <h2>Congratulations!</h2>
     <h2>Your Payment has been successful.</h2>
     <h2>Please wait for redirecting to Your Order Page ...</h2>
    </div>
  );
};

export default Verify;