import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Title from "../../Components/Title";


const Myorder = () => {
  const {products, currency} = useContext(ProductContext)
  return (
    <div>
      <Title text1={'MY'} text2={"ORDERS"} />
      {
        products.slice(0,4).map((item, index) =>{
          (
            <div key={index} className="py-3 px-4 flex flex-col md:flex-row justify-between items-center">

             </div>
          )
        })
      }
    </div>
  );
};

export default Myorder;