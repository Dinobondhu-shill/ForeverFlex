import React, { useContext, useEffect } from 'react';
import Title from '../../Components/Title';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { ProductContext } from '../../Context/ProductContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();
  const {backendUrl, setToken, token} = useContext(ProductContext)

  const handleSignUp =async(e) =>{
    e.preventDefault();
    try {
      const form = e.target
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const response = await axios.post(backendUrl + "api/user/register", {name, email, phone, password, })
    console.log(response)
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token", response.data.token)
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
      
    }

    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    if(token){
  navigate('/')
    }
  },[token])
  return (
    <div className='register flex flex-col gap-10 justify-center items-center mt-5 md:mt-16 font-prata'>
      <Title text1={""} text2={"Sign Up"} />
      <form onSubmit={handleSignUp}>
        <div className='flex flex-col gap-5'>
          <input type="text" name='name' required placeholder='Full Name' className='outline-none border p-2 border-black min-w-96'/>
          <input type="email" name='email' required placeholder='Email' className='outline-none border p-2 border-black min-w-96'/>
          <input type='number' name='phone' required placeholder='Your Number' className='outline-none border p-2 border-black min-w-96'/>
          <input type="password" name='password' required placeholder='Password' className='outline-none border p-2 border-black min-w-96'/>
        </div>
        <div className='flex justify-between text-[14px] mt-2 mb-3'>
          <Link className='border-b border-black' to={'/login'}>Already Have Account? Login</Link>
        </div>
        <div className='flex justify-center my-10'>
        <button className='border bg-black px-10 py-2 text-white text-[14px]' type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;