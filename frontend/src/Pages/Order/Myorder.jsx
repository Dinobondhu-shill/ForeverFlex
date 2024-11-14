import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Title from "../../Components/Title";
import axios from "axios";
import { toast } from "react-toastify";

const Myorder = () => {
  const { products, currency, backendUrl, token } = useContext(ProductContext);
  const [data, setData] = useState([]);

  const getOrderData = async (token) => {
    try {
      const res = await axios.post(
        backendUrl + "api/order/my-orders",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.success) {
        let allOrder = [];
        res.data.orderData.forEach((order) => {
          order.items.forEach((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrder.push(item);
          });
        });
        setData(allOrder);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getOrderData(token);
  }, [token]);

  return (
    <div className="flex flex-col gap-4 items-start mt-16 mb-4">
      <Title text1={"MY"} text2={"ORDERS"} />
      <div className="flex flex-col gap-5 w-full">
        {data.length === 0 ? (
          <div className="text-gray-500 text-center text-3xl">No Order Data Yet</div>
        ) : (
          data.map((order, orderIndex) => (
            <div key={orderIndex} className="py-3 px-4 border-t border-b">
              <div className="flex gap-3 justify-between items-center">
                <div className="flex w-2/5 gap-5">
                  <div className="w-20">
                    <img
                      src={order.imagesUrl[0]}
                      alt={order.name}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h2>{order.name}</h2>
                    <div className="flex gap-2">
                      <p>{currency}{order.price}</p>
                      <p>Size: {order.size}</p>
                      <p>Quantity: {order.quantity}</p>
                    </div>
                    <p>
                      Date: <span className="text-gray-500">{new Date(order.date).toLocaleDateString()}</span>
                    </p>
                    <p>
                      Payment: <span className="text-gray-500">{order.paymentMethod}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-600"></span>{order.status}
                </div>
                <div className="border px-3 py-2">TRACE ORDER</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Myorder;
