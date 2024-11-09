import { useState } from 'react';
import upload from '../assets/upload_area.png'

const AddProduct = () => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  console.log([image1, image3, image2, image4])
  const handleAddProduct = async (e) =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const category = form.category.value;
    const subCategory = form.subCategory.value;
    const bestSeller = form.bestSeller.value;
    console.log({name, description, price, category, subCategory, bestSeller})
    
  }


  return (
    <div className='py-4 md:py-8 text-gray-500'>
      <form onSubmit={handleAddProduct} className='flex flex-col gap-4'>
      <div>
        <h3 className='text-gray-500'>Upload Image</h3>
        <div className='flex gap-4 my-2'>
          <label htmlFor="image1">
            <img src={!image1 ? upload : URL.createObjectURL(image1)} className='w-28 object-cover cursor-pointer h-36' />
            <input type="file" onChange={(e)=>setImage1(e.target.files[0])} id="image1" hidden/>
          </label>
          <label htmlFor="image2">
            <img src={!image2 ? upload : URL.createObjectURL(image2)} className='w-28 object-cover cursor-pointer h-36' />
            <input type="file" onChange={(e)=>setImage2(e.target.files[0])} id="image2" hidden/>
          </label>
          <label htmlFor="image4">
            <img src={!image3 ? upload : URL.createObjectURL(image3)} className='w-28 object-cover cursor-pointer h-36' />
            <input type="file" onChange={(e)=>setImage3(e.target.files[0])} id="image3" hidden/>
          </label>
          <label htmlFor="image4">
            <img src={!image4 ? upload : URL.createObjectURL(image4)} className=' cursor-pointer w-28 object-cover h-36' />
            <input type="file" onChange={(e)=>setImage4(e.target.files[0])} id="image4" hidden/>
          </label>
        </div>
      </div>

    <div className='flex flex-col gap-2'>
      <label className='text-gray-500'> Product Name</label>
      <input type="text" className='border outline-[#975c5c] px-2 py-2 rounded-md' placeholder='Type Here' name='name' />
    </div>
    <div className='flex flex-col gap-2'>
      <label className='text-gray-500'>Product Description</label>
      <textarea type="text" className='border outline-[#975c5c] px-2 py-2 rounded-md' placeholder='Write Description Here' name='description' />
    </div>
      <div className='flex gap-6'>
        {/* Category */}
        <div className='flex flex-col gap-2 w-fit '> 
          <label htmlFor="">Product Category</label>
          <select name="category" className='border outline-[#935555] border-gray-400 rounded-md px-2 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        {/* Subcategory */}
        <div className='flex flex-col gap-2 w-fit '> 
          <label htmlFor="">Product Subcategory</label>
          <select name="subCategory" className='border outline-[#935555] border-gray-400 rounded-md px-2 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        {/* Price */}
        <div className='flex flex-col gap-2   '> 
          <label htmlFor="">Product Price</label>
          <input type='number' className='border outline-[#935555] border-gray-400 rounded-md px-2 py-2 w-1/2' placeholder='135' name='price' min={1}/>
        </div>
      </div>
      {/* sizes */}
    <div>
      <p>Product Sizes</p>
      <div className='flex gap-3 py-2'>
        <p className='px-3 py-1 cursor-pointer bg-gray-400 text-white w-fit'>S</p>
        <p className='px-3 py-1 cursor-pointer bg-gray-400 text-white w-fit'>M</p>
        <p className='px-3 py-1 cursor-pointer bg-gray-400 text-white w-fit'>L</p>
        <p className='px-3 py-1 cursor-pointer bg-gray-400 text-white w-fit'>XL</p>
        <p className='px-3 py-1 cursor-pointer bg-gray-400 text-white w-fit'>XXL</p>
      </div>
    </div>
    <div className='flex gap-2'>
      <input type="checkbox" name="bestSeller" id="bestSeller" />
      <label htmlFor="bestSelller">Add to Bestseller</label>
    </div>
      <button type="submit" className='px-10 py-3 bg-black text-white w-fit'>ADD</button>
      </form>
    </div>
  );
};

export default AddProduct;