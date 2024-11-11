import React from 'react';

const SingleProduct = ({product}) => {
  return (
  
  
      
      <div className="flex border my-3 p-1">
  <div className="flex-1 flex items-center">
  <img src={product?.imagesUrl[0]} className='w-14' />

  </div>
  <div className="flex-[3] flex items-center">
  <h2>{product.name}</h2>  </div>
  <div className="flex-1 flex items-center">
  <p>${product.price}</p>

  </div>
  <div className="flex-1 flex items-center ">

  <p>{product.category}</p>
  </div>
  <div className="flex-1 flex items-center justify-center">
  <p className='cursor-pointer hover:scale-110 hover:text-red-600'>X</p>
  </div>
</div>

  );
};

export default SingleProduct;