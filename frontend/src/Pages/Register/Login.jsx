import React from 'react';
import Title from '../../Components/Title';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center mt-10 md:mt-32 font-prata'>
      <Title text1={""} text2={"Login"} />
      <form>
        <div className='flex flex-col gap-5'>
          <input type="email" required placeholder='Email' className='outline-none border p-2 border-black min-w-96'/>
          <input type="password" required placeholder='Password' className='outline-none border p-2 border-black min-w-96'/>
        </div>
        <div className='flex justify-between text-[14px] mt-2 mb-3'>
          <p className='border-b border-black'>Forgot your Password?</p>
          <Link className='border-b border-black' to={'/register'}>Create Account</Link>
        </div>
        <div className='flex justify-center my-10'>
        <button className='border bg-black px-10 py-2 text-white text-[14px]' type='submit'>Log in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;