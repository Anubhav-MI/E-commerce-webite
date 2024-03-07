import React from "react";
import { useAuth } from "../../context/auth";
const Admindashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <div className="flex px-8">
      <div>
        <p className="text-center">Menu</p>
        <ul class="list-group">
          <li class="list-group-item">
            <a href="/admin/manageproduct">Manage products</a>
          </li>
          <li class="list-group-item">
            <a href="/admin/managecategory">Manage categories</a>
          </li>
          <li class="list-group-item">Order Details</li>
          <li class="list-group-item">
            <a href="/admin/users">User details</a>
          </li>
          {/* <li class="list-group-item">And a fifth one</li> */}
        </ul>
      </div>
      <div>
        <p>Profile</p> <pre>{JSON.stringify(auth, null, 4)}</pre>
      </div>
    </div>
  );
};

export default Admindashboard;
