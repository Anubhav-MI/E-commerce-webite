import { React, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/auth";
import moment from "moment";
const OrdersPage = () => {
  const [orders, setorders] = useState([]);
  const [auth] = useAuth();
  const getOrders = async () => {
    try {
      const user = auth.user.name;
      const { data } = await axios.post("http://localhost:3001/order", {
        buyer: user,
      });
      console.log(data);
      setorders(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (auth?.token) {
      // console.log(auth);
      getOrders();
    }
  }, [auth?.token]);
  return (
    <div>
      <h2 className="text-center font-bold text-5xl pb-8">All Orders</h2>
      {orders &&
        orders.map((p, i) => {
          return (
            <div className="border shadow">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Status</th>
                    <th scope="col">Buyer</th>
                    <th scope="col">Order date</th>
                    <th scope="col">Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{p?.status}</td>
                    <td>{p?.buyer}</td>
                    <td>{moment(p?.createdAt).fromNow()}</td>
                    <td>{p?.payment.success ? "Success" : "Failed"}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                {p?.products?.map((p, i) => (
                  <div className="flex gap-6">
                    <div>
                      <img src={p.imgURL}></img>
                    </div>
                    <div>
                      <p>Product name : {p.title}</p>
                      <p>Category : {p.category}</p>
                      <p>Price : {p.price}</p>
                      <p>Rating : {p.rating}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default OrdersPage;
