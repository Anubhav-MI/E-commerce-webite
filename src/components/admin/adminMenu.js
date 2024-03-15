import React from "react";
import { useNavigate } from "react-router-dom";

const AdminMenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div>
        <div className="flex flex-col pb-8">
          <ul class="list-group min-w-60">
            <button onClick={() => navigate("/admin")}>
              <li class="list-group-item active" aria-current="true">
                Profile{" "}
              </li>
            </button>

            <button onClick={() => navigate("/admin/manageproduct")}>
              <li class="list-group-item">Manage Products</li>
            </button>

            <button onClick={() => navigate("/admin/managecategory")}>
              <li class="list-group-item">Manage Catagories</li>
            </button>

            <button onClick={() => navigate("/admin/manageOrders")}>
              <li class="list-group-item">Manage orders</li>
            </button>

            <button onClick={() => navigate("/admin/users")}>
              <li class="list-group-item">All Users</li>
            </button>
          </ul>
        </div>
        {/* <p className="text-center">Admin Panel</p> */}
        {/* <ul class="list-group">
          <li class="list-group-item" onClick={() => navigate("/")}>
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
        </ul> */}
      </div>
    </div>
  );
};

export default AdminMenu;
