import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { assets } from '../../public/assets/frontend_assets/assets';
import { Link } from 'react-router-dom';

const SearchBar = () => {

  const {showSearch, setShowSearch} = useContext(ProductContext);

  const handleShowSearch =()=>{
    setShowSearch(!showSearch)
  }
  
  return (
    <Link to={'/collections'} onClick={handleShowSearch} className='w-[1.25rem] cursor-pointer'>
      <img src={assets.search_icon} alt="" />
    </Link >
  );
};

export default SearchBar;