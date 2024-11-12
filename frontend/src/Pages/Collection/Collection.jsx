import React, { useContext, useEffect, useState } from 'react';
import Title from '../../Components/Title';
import { ProductContext } from '../../Context/ProductContext';
import ProductItem from '../../Components/ProductItem';
import { assets } from '../../../public/assets/frontend_assets/assets';
import { Link } from 'react-router-dom';

const Collection = () => {
  const {products, showSearch, setShowSearch} = useContext(ProductContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false)
  const [sortType, setSortType] = useState("Relevent")



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

  const handleShowFilter = ()=>{
    setShowFilter(!showFilter)
  }

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

const sortProduct =()=>{
  let fpcopy = filterProducts.slice();
  switch(sortType){
    case('low-high'):
    setFilterProducts(fpcopy.sort((a,b)=> a.price - b.price))
    break;

    case('high-low'):
    setFilterProducts(fpcopy.sort((a,b)=> b.price - a.price))
    break;

    default:
    applyFilter();
  }
}
useEffect(()=>{
  applyFilter()
}, [category, subCategory, products])

useEffect(()=>{
  sortProduct();
}, [sortType])

const handleShowSearch =()=>{
  setShowSearch(!showSearch)
}

  return (
    <div>
      {showSearch ? <div className='h-20 flex justify-center gap-4 items-center border-b-2 bg-[#edeaea32]'>
        <div className=' flex justify-between bg-transparent w-2/4  border border-gray-500 py-2 px-4 rounded-full'>
        <input type="text" placeholder='Search' className='w-4/5 outline-none bg-transparent' />
        <img className='h-5 cursor-pointer' src={assets.search_icon}  />
        </div>
        <img onClick={handleShowSearch} src={assets.cross_icon} className='cursor-pointer' />
      </div> : null}
      {/* others content  */}
      <div className='my-5 md:my-10 md:flex gap-10'>
     {/* Filter section */}
     
     <div className='max-w-56 my-4'>
     <h3 onClick={handleShowFilter} className='text-2xl mb-10 pt-2 flex items-center gap-2'>FILTERS
      <img src={assets.dropdown_icon} className={`h-4 md:hidden ${showFilter? 'rotate-90': ''}`} />
     </h3>
     
      <div className={`md:flex flex-col gap-5 space-y-3 md:space-y-0 ${showFilter ? "": "hidden"}`}>
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
     </div>
     {/* products sections */}
     <div  className='flex-1'>
      <div className='flex md:flex-row gap-4 md:gap-0  flex-col-reverse justify-between md:items-center'>
        <Title text1={"ALL"} text2={"COLLECTIONS"} />
        <div>
          <select onChange={(e)=> setSortType(e.target.value)} className='p-4 border text-gray-700 outline-none text-[15px]'>
            <option value="Relevent">Sort By: Relevent</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>
      </div>
      {/* Render all the product here */}
      <div className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    {
      filterProducts?.map((item, index)=>(
        <Link key={index} to={`/collection/${item._id}`}>
        <ProductItem item={item}/></Link>
      ))
    }
      </div>
     </div>
    </div>
    </div>
  );
};

export default Collection;