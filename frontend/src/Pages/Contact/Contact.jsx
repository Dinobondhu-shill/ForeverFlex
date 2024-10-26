
import { assets } from '../../../public/assets/frontend_assets/assets';
import Subscribe from '../../Components/Subscribe';
import Title from '../../Components/Title';

const Contact = () => {
  return (
    <div className='my-8'>
      <Title text1={"CONTACT"} text2={"US"} />
        <div className='flex flex-col md:flex-row justify-center items-center my-5 gap-10'>
          <img src={assets.contact_img} alt="" className='w-1/2 rounded-lg px-10'/>
          <div className='w-1/2 flex flex-col justify-center text-gray-500 font-medium text-[18px]'>
            <h4 className='font-medium text-xl my-5 text-gray-700'>Our Store</h4>
            <p className='my-5 '>54709 Willms Station <br />
            Suite 350, Washington, USA</p>
            <a href="tel:+8801937392767">+8801937392767</a>
            <a href="mailto:dinu.webdev@gmail.com">Email: admin@foreverfir.com</a>
            <h4 className='font-medium text-xl my-5 text-gray-700'>Careers at Forever</h4>
            <p>Learn more about our teams and job openings.</p>
            <button className='px-8 py-4 border border-black w-fit my-3'>Explore Jobs</button>
          </div>
        </div>
        <Subscribe />
    </div>
  );
};

export default Contact;