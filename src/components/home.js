import React from "react";
import Hero from "./hero";
import Product from "./product";
import { useAuth } from "../context/auth";
const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <div>
      <div className="App">
        <pre>{JSON.stringify(auth, null, 4)}</pre>
        <Hero />
        <Product />
      </div>
    </div>
  );
};

export default Home;
