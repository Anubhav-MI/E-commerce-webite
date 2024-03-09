import { React, useEffect } from "react";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import { json, useNavigate } from "react-router-dom";
const Cartpage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setcart] = useCart();
  const navigate = useNavigate();
  useEffect(() => {
    let existingcart = localStorage.getItem("cart");
    if (existingcart) setcart(JSON.parse(existingcart));
  }, []);

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  };

  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setcart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="m-8">
      <p>Home/Cart</p>
      <h2 className="text-center font-bold text-5xl">{`Hello ${
        auth?.token && auth?.user?.name
      }`}</h2>
      <h4>
        {cart.length > 1
          ? `You have ${cart.length} items in your cart ${
              auth.token ? "" : "Please login to checkout"
            }`
          : "Your cart is empty"}
      </h4>
      <div className="flex justify-between">
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Options</th>
              </tr>
            </thead>

            {cart?.map((p) => (
              <tbody>
                <tr>
                  <td>{p.title}</td>
                  <td>{p.category}</td>
                  <td>{p.price}</td>
                  <td>
                    <button onClick={() => removeCartItem(p._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="text-center">
          <h2>Cart Summary</h2>
          <p>Total|Checkout|Payment</p>
          <hr />
          <h4>Total: Rs{totalPrice()}</h4>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
