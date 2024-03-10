import React from "react";
import { useNavigate } from "react-router-dom";

const AdminMenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div>
        <p className="text-center">Admin Panel</p>
        <ul class="list-group">
          <li
            class="list-group-item"
            onClick={() => navigate("/admin/manageproduct")}
          >
            Manage products
          </li>
          <li
            class="list-group-item"
            onClick={() => navigate("/admin/managecategory")}
          >
            Manage categories
          </li>
          <li
            class="list-group-item"
            onClick={() => navigate("/admin/manageOrders")}
          >
            Order Details
          </li>
          <li class="list-group-item" onClick={() => navigate("/admin/users")}>
            User Details
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
