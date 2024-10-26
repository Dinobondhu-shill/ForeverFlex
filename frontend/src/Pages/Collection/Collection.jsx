import React from 'react';

const Collection = () => {
  return (
    <div className='my-5 md:my-10 flex '>
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
     {/*  */}
    </div>
  );
};

export default Collection;