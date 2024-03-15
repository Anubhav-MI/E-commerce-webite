import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import AdminMenu from "./adminMenu";
import axios from "axios";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;
const ManageOrders = () => {
  const [status, setstatus] = useState([
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
  ]);
  const [orders, setorders] = useState([]);
  const [auth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/getallorder");
      console.log(data);
      setorders(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handlechange = async (orderId, value) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3001/order-status/${orderId}`,
        {
          status: value,
        }
      );
      getOrders();
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
    <div className="md:flex content-between gap-12 py-4 mx-12 my-12">
      <div>
        <AdminMenu />
      </div>
      <div className="flex-1">
        <div>
          <h2 className="text-center font-bold text-5xl pb-8">All Orders</h2>
          {orders &&
            orders.map((p, i) => {
              return (
                <div className="border shadow">
                  <table className="table">
                    <thead>
                      <tr>
                        <td scope="col">#</td>
                        <td scope="col">Status</td>
                        <td scope="col">Buyer</td>
                        <td scope="col">Order date</td>
                        <td scope="col">Payment</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>{i + 1}</th>
                        <Select
                          bordered={false}
                          onChange={(value) => handlechange(p._id, value)}
                          defaultValue={p?.status}
                        >
                          {status.map((s, i) => (
                            <Option key={i} value={s}>
                              {s}
                            </Option>
                          ))}
                        </Select>
                        <th>{p?.buyer}</th>
                        <th>{moment(p?.createdAt).fromNow()}</th>
                        <th>{p?.payment.success ? "Success" : "Failed"}</th>
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
      </div>
    </div>
  );
};

export default ManageOrders;
