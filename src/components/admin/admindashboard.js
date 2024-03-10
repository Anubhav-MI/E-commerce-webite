import React from "react";
import { useAuth } from "../../context/auth";
import AdminMenu from "./adminMenu";
const Admindashboard = () => {
  const [auth] = useAuth();
  return (
    <div className="flex px-8">
      <AdminMenu />
      <div>
        <p>Profile</p> <pre>{JSON.stringify(auth, null, 4)}</pre>
      </div>
    </div>
  );
};

export default Admindashboard;
