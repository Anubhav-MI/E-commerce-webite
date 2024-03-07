import React, { useState, useEffect } from "react";
import axios from "axios";
const UserDetails = () => {
  const [users, setusers] = useState();

  const handledelete = async (id) => {
    if (window.confirm("Are you sure u want to delete this user?")) {
      try {
        const data = await axios.post("http://localhost:3001/deleteusers", {
          _id: id,
        });
        console.log(data);
        alert("Deleted Successfully");
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    } else {
      return;
    }
  };
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("http://localhost:3001/userdetails");
      setusers(data);
      console.log(data.data);
      // console.log(products.data[0].title);
    };
    fetchdata();
  }, []);
  return (
    <div>
      <p className="m-8">Product list</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>

            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Options</th>
          </tr>
        </thead>

        {users &&
          users?.data.map((user) => (
            <tbody>
              <tr>
                <th scope="row">#</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>{user.rating}</td> */}
                <td>
                  <button
                    onClick={() => handledelete(user._id)}
                    type="button"
                    class="rounded-lg bg-red-600 py-2 px-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default UserDetails;
