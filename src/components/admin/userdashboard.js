import React from "react";
import { useNavigate } from "react-router-dom";

const Userdashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex content-between mx-12 my-12 ">
      <div className="flex flex-col px-8 py-4">
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">
            Profile
          </li>
          <li class="list-group-item">
            <button onClick={() => navigate("/order")}>Orders</button>
          </li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <div className="px-8 py-4  border-black border-dashed border-2 min-h-80">
        Info
      </div>
    </div>
  );
};

export default Userdashboard;
