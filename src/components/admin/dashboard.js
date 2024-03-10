import React from "react";
import { useAuth } from "../../context/auth";
import Admindashboard from "./admindashboard";
import Userdashboard from "./userdashboard";
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
          <Userdashboard></Userdashboard>
        </>
      )}
    </div>
  );
};

export default Dashboard;
