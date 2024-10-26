import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { ProductContext } from '../Context/ProductContext';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const {products} = useContext(ProductContext);
  const [LatestCollection, setLatestCollection]= useState([])

useEffect(()=>{
  setLatestCollection(products.slice(0,10))
},[products])

  return (
    <div className='py-4 md:py-6'>
     <Title text1={'LATEST'} text2={'COLLECTIONS'} />
      <p className='text-center  text-[16px] py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cum, molestias sit minima ab sed.</p>

      {/* Rendering Latest collections */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-8'>
    {
      LatestCollection.map((item, index) => 
      <ProductItem key={index} item={item}/>
      )
    }        
      </div>
    </div>
  );
};

export default LatestCollection;