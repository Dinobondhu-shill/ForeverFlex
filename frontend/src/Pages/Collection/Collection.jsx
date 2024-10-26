import React, { useContext, useEffect, useState } from 'react';
import Title from '../../Components/Title';
import { ProductContext } from '../../Context/ProductContext';
import ProductItem from '../../Components/ProductItem';

const Collection = () => {
  const {products} = useContext(ProductContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }
 
  const toggleSubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }
// useEffect(()=>{
//   setFilterProducts(products)
// },[products])

const applyFilter=()=>{
  let productscopy = products.slice();
  if(category.length>0){
    productscopy = productscopy.filter(item => category.includes(item.category))
  }
  if(subCategory.length > 0){
    productscopy = productscopy.filter(item => subCategory.includes(item.subCategory))
  }
  setFilterProducts(productscopy)
}

useEffect(()=>{
  applyFilter()
})

  return (
    <div className='my-5 md:my-10 flex gap-10'>
     {/* Filter section */}
     <div className='max-w-56 flex flex-col gap-5'>
      <h3 className='text-2xl'>FILTERS</h3>
      <div className='border py-1 pl-3 pr-24'>
      <p className='text-xl py-2'>Category</p>
      <div className='flex flex-col gap-2 text-[15px]'>
      <div className='flex gap-3 '>
        <input type="checkbox" value={"Men"} onClick={toggleCategory}/>
        <p>Men</p>
      </div>
      <div className='flex gap-3'>
        <input type="checkbox" value={"Women"} onClick={toggleCategory}/>
        <p>Women</p>
      </div>
      <div className='flex gap-3'>
        <input type="checkbox" value={"Kids"} onClick={toggleCategory}/>
        <p>Kids</p>
      </div>
      </div>
      </div>
      {/* types of filter */}
      <div className='border py-1 pl-3 pr-24'>
      <p className='text-xl py-2'>Types</p>
      <div className='flex flex-col gap-2 text-[15px]'>
      <div className='flex gap-3 '>
        <input type="checkbox" value={"Topwear"} onClick={toggleSubCategory}/>
        <p>Topwear</p>
      </div>
      <div className='flex gap-3'>
        <input type="checkbox" value={"Bottomwear"} onClick={toggleSubCategory}/>
        <p>Bottomwear</p>
      </div>
      <div className='flex gap-3'>
        <input type="checkbox" value={"Winterwear"} onClick={toggleSubCategory}/>
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
      filterProducts?.map((item, index)=>(
        <ProductItem key={index} item={item}/>
      ))
    }
      </div>
     </div>
    </div>
  );
};

export default Collection;