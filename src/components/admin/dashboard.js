import React from "react";
import { useAuth } from "../../context/auth";
import Admindashboard from "./admindashboard";
const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <div>
      {auth.role == 1 ? (
        <>
          <Admindashboard></Admindashboard>
        </>
      ) : (
        <>
          <p>User</p>
        </>
      )}
    </div>
  );
};

export default Dashboard;
