import upload from '../assets/upload_area.png'

const AddProduct = () => {
  return (
    <div className='py-4 md:py-8 text-gray-500'>
      <form>
      <div>
        <h3 className='text-gray-500'>Upload Image</h3>
        <div className='flex gap-4 my-2'>
          <label htmlFor="image1">
            <img src={upload} className='w-24 cursor-pointer' />
            <input type="file" id="image1" hidden/>
          </label>
          <label htmlFor="image2">
            <img src={upload} className='w-24 cursor-pointer' />
            <input type="file" id="image2" hidden/>
          </label>
          <label htmlFor="image4">
            <img src={upload} className='w-24 cursor-pointer' />
            <input type="file" id="image3" hidden/>
          </label>
          <label htmlFor="image4">
            <img src={upload} className='w-24 cursor-pointer' />
            <input type="file" id="image4" hidden/>
          </label>
        </div>
      </div>

    <div className='flex flex-col gap-2'>
      <label className='text-gray-500'> Product Name</label>
      <input type="text" className='border outline-[#975c5c] px-2 py-2 rounded-md' placeholder='Type Here' />
    </div>
    <div className='flex flex-col gap-2'>
      <label className='text-gray-500'>Product Description</label>
      <textarea type="text" className='border outline-[#975c5c] px-2 py-2 rounded-md' placeholder='Write Description Here' />
    </div>
      <div className='flex gap-6'>
        {/* Category */}
        <div className='flex flex-col gap-2 w-fit '> 
          <label htmlFor="">Product Category</label>
          <select name="" className='border outline-[#935555] border-gray-400 rounded-md px-2 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        {/* Subcategory */}
        <div className='flex flex-col gap-2 w-fit '> 
          <label htmlFor="">Product Subcategory</label>
          <select name="" className='border outline-[#935555] border-gray-400 rounded-md px-2 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        {/* Price */}
        <div className='flex flex-col gap-2   '> 
          <label htmlFor="">Product Price</label>
          <input type='number' className='border outline-[#935555] border-gray-400 rounded-md px-2 py-2 w-1/2' placeholder='135' min={1}/>
        </div>
      </div>
      </form>
    </div>
  );
};

export default AddProduct;