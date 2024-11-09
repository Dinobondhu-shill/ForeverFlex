import React from 'react';

const Login = () => {
  return (
    <div className='w-full h-full min-h-screen flex flex-col justify-center items-center'>
      <div className='w-3/12 drop-shadow-xl rounded-xl py-10 flex flex-col text-start items-center bg-white'>
      <h2 className='font-bold text-2xl text-start'>Admin Panel</h2>
      <form className='space-y-3'>
        <div>
          <h2 className='text-[15px] text-gray-500 mb-1'>Email Address</h2>
          <input type="email" name="email" placeholder='your@email.com' className='border outline-none px-2 py-2 rounded-md'/>
        </div>
        <div>
          <h2 className='text-[15px] text-gray-500 mb-1'>Password</h2>
          <input type="password" name="password" placeholder='Enter Password' className='border outline-none px-2 py-2 rounded-md'/>
        </div>
        <button type="submit" className='w-full bg-black text-white rounded-2xl py-2'>Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;