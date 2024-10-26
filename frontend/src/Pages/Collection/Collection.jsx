import React, { useContext } from 'react';
import Title from '../../Components/Title';
import { ProductContext } from '../../Context/ProductContext';
import ProductItem from '../../Components/ProductItem';

const Collection = () => {
  const {products} = useContext(ProductContext)
  return (
    <div className='my-5 md:my-10 flex gap-10'>
     {/* Filter section */}
     <div className='max-w-56 flex flex-col gap-5'>
      <h3 className='text-2xl'>FILTERS</h3>
      <div className='border py-1 pl-3 pr-24'>
      <p className='text-xl py-2'>Category</p>
      <div className='flex flex-col gap-2 text-[15px]'>
      <div className='flex gap-3 '>
        <input type="checkbox" value={"Men"}/>
        <p>Men</p>
      </div>
      <div className='flex gap-3'>
        <input type="checkbox" value={"Women"}/>
        <p>Women</p>
      </div>
      <div className='flex gap-3'>
        <input type="checkbox" value={"Kids"}/>
        <p>Kids</p>
      </div>
      </div>
      </div>
      {/* types of filter */}
      <div className='border py-1 pl-3 pr-24'>
      <p className='text-xl py-2'>Types</p>
      <div className='flex flex-col gap-2 text-[15px]'>
      <div className='flex gap-3 '>
        <input type="checkbox" value={"Topwear"}/>
        <p>Topwear</p>
      </div>
      <div className='flex gap-3'>
        <input type="checkbox" value={"Bottomwear"}/>
        <p>Bottomwear</p>
      </div>
      <div className='flex gap-3'>
        <input type="checkbox" value={"Winterwear"}/>
        <p>Winterwear</p>
      </div>
      </div>
      </div>
     </div>
     {/* products sections */}
     <div  className='flex-1'>
      <div className='flex justify-between items-center'>
        <Title text1={"ALL"} text2={"COLLECTIONS"} />
        <div>
          <select className='p-4 border text-gray-700 outline-none text-[15px]'>
            <option value="Relevent">Sort By: Relevent</option>
            <option value="Low to Higt">Sort By: Low to High</option>
            <option value="High to Low">Sort By: High to Low</option>
          </select>
        </div>
      </div>
      {/* Render all the product here */}
      <div className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    {
      products.map((item, index)=>(
        <ProductItem key={index} item={item}/>
      ))
    }
      </div>
     </div>
    </div>
  );
};

export default Collection;