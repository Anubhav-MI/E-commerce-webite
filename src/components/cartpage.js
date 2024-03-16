import { React, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import { json, useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import toast from "react-hot-toast";
const Cartpage = () => {
  const [auth] = useAuth();
  const [cart, setcart] = useCart();
  const [clientToken, setclientToken] = useState("");
  const [instance, setinstance] = useState("");
  const [loading, setloading] = useState(false);
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

  //get gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/braintree/token");
      setclientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = async () => {
    try {
      const buyer = auth.user.name;
      setloading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post(
        "http://localhost:3001/braintree/payment",
        {
          cart,
          nonce,
          buyer,
        }
      );
      setloading(false);
      window.localStorage.removeItem("cart");
      setcart([]);
      toast.success("Payment successful");
      navigate("/order");
    } catch (err) {
      setloading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(cart);
    getToken();
  }, [auth?.token]);

  return (
    <div className="md:m-8">
      <p>Home/Cart</p>
      <h4 className="text-center text-2xl md:text-4xl py-8">
        {cart.length >= 1
          ? `You have ${cart.length} items in your cart ${
              auth.token ? "" : "Please login to checkout"
            }`
          : "Your cart is empty"}
      </h4>
      {!cart.length < 1 && (
        <div className="md:mx-28 py-6 md:flex  justify-around items-center gap-24 p-8 border shadow">
          <div className="mb-4 md:mb-14">
            {cart?.map((p) => (
              <div className="flex gap-3 items-center mb-4">
                <div className="pb-8">
                  <img src={p.imgURL} alt={p.title} />
                </div>
                <div>
                  <p className="text-lg md:text-2xl">{p.title}</p>
                  <p className="text-lg md:text-2xl">Rs{p.price}</p>
                  <p className="text-lg md:text-2xl">{p.rating}</p>
                  <p className="text-lg md:text-2xl">{p.category}</p>
                  <button
                    onClick={() => removeCartItem(p._id)}
                    className="text-lg btn btn-primary"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <hr />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold md:text-5xl md:font-bold">
              Cart Summary
            </h2>
            <p className="text-xl md:text-2xl py-3">Total|Checkout|Payment</p>
            <h4 className="text-xl md:text-3xl">Total: Rs{totalPrice()}</h4>
            <div className="mt-4">
              {!clientToken || !cart?.length ? (
                "Error"
              ) : (
                <>
                  <DropIn
                    options={{
                      authorization: clientToken,
                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(instance) => setinstance(instance)}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      console.log("Button clicked");
                      handlePayment();
                    }}
                    // disabled={!loading || !instance || auth?.token}
                  >
                    {loading ? "Processing..." : "Make payment"}
                  </button>
                </>
              )}
            </div>
            <p className="py-4">
              Please choose card option to make payment here
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
