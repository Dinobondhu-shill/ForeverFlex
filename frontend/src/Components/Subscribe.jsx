import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
  }
  return (
    <div className="py-5 md:py-16">
      <h2 className="text-2xl font-medium text-center mb-2">Subscribe now & get 20% off</h2>
      <p className='text-gray-500 text-[15px] font-medium text-center mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure quasi.</p>
      <form onSubmit={handleSubscribe} className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border w-1/2 border-gray-300 rounded"
        />
        <button type="submit" className="bg-black text-white p-4 md:py-4 md:px-12 ">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;