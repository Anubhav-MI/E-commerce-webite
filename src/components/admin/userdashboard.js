import React from "react";
import { useNavigate } from "react-router-dom";

const Userdashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex content-between">
      <div className="flex flex-col">
        <div>Profile</div>
        <button onClick={() => navigate("/order")}>Orders</button>
      </div>
      <div>Info</div>
    </div>
  );
};

export default Userdashboard;
