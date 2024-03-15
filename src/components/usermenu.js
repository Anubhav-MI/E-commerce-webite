import React from "react";
import { useNavigate } from "react-router-dom";
const Usermenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col pb-8">
        <ul class="list-group min-w-60">
          <button onClick={() => navigate("/admin")}>
            <li class="list-group-item active" aria-current="true">
              Profile
            </li>
          </button>

          <button onClick={() => navigate("/order")}>
            <li class="list-group-item">Orders </li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Usermenu;
