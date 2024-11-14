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
      setData(res.data.orderData || []);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getOrderData(token);
  }, [token]);

  const getProductDetails = (productId) => {
    return products.find((product) => product._id === productId);
  };

  return (
    <div className="flex flex-col gap-4 items-start mt-16 mb-4">
      <Title text1={"MY"} text2={"ORDERS"} />
      {data.length > 0 ? (
        data.map((order, orderIndex) => (
          <div
            key={orderIndex}
            className="w-full py-3 px-4 border-t border-b flex flex-col md:flex-row justify-between items-center"
          >
            {order.items && Object.entries(order.items).map(([productId, sizeQuantity], itemIndex) => {
              const product = getProductDetails(productId);
              return (
                <div key={itemIndex} className="flex gap-3 items-center flex-1">
                  <div className="w-20">
                    <img
                      src={product?.image || "/placeholder.jpg"}
                      alt={product?.name || "Product Image"}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h2>{product?.name || "Product Name"}</h2>
                    <div className="flex gap-2">
                      <p>{currency}{product?.price || "N/A"}</p>
                      <p>Size & Quantity:</p>
                      {Object.entries(sizeQuantity).map(([size, quantity]) => (
                        quantity > 0 && (
                          <p key={size}>
                            {size}: {quantity}
                          </p>
                        )
                      ))}
                    </div>
                    <p>
                      Date:{" "}
                      <span className="text-gray-500">
                        {new Date(order.date).toLocaleDateString() || "N/A"}
                      </span>
                    </p>
                    <p>
                      Payment: <span className="text-gray-500">{order.paymentMethod || "N/A"}</span>
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="flex-1">{order.status || "Status Unavailable"}</div>
            <div className="border px-3 py-2">TRACE ORDER</div>
          </div>
        ))
      ) : (
        <p>No orders available.</p>
      )}
    </div>
  );
};

export default Myorder;
