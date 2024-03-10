import { React, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/auth";
const OrdersPage = () => {
  const [orders, setorders] = useState([]);
  const [auth, setauth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/order");
      // console.log(data);
      setorders(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (auth?.token) {
      console.log(auth);
      // getOrders();
    }
  }, [auth?.token]);
  return <div>Orders</div>;
};

export default OrdersPage;
