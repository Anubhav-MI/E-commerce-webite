import React from "react";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <div>
      {auth.role == 1 ? (
        <>
          <p>Admin</p>
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
