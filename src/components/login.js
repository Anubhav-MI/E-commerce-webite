import React, { useState } from "react";
import axios from "axios";
import signimg from "../Images/sign up image.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../context/auth";
const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [auth, setAuth] = useAuth();
  const handlesubmit = () => {
    if (!email || !password) {
      alert("Email and password are compulsory fields");
      return;
    }
    const response = axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then((response) => {
        alert("User logged successfully");
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        window.localStorage.setItem("auth", JSON.stringify(response.data));

        navigate("/", {
          replace: true,
        });
        setemail("");
        setpassword("");
      })
      .catch((error) => {
        console.error("Login error:", error);
        if (error.response && error.response.status === 400) {
          alert("Wrong credentials");
        } else {
          alert("An error occurred during login. Please try again later.");
        }
      });
  };
  return (
    <div>
      <div className="flex">
        <div>
          <img className="h-4/6" src={signimg} width={1100} alt=".." />
        </div>
        <div className="flex flex-col pt-16 px-16 gap-8">
          <h2 className="font-normal text-5xl">Create an account</h2>
          <p>Enter your deatils below</p>
          <div class="form-floating mb-3">
            <input
              value={email}
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setemail(e.target.value)}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              value={password}
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button
            onClick={handlesubmit}
            type="button"
            class="btn btn-outline-secondary min-h-16"
          >
            Login
          </button>
          <GoogleOAuthProvider clientId="189418374010-d61841o55g1nhhaqj73pov0o38v2dld2.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log(decoded);
                navigate("/", {
                  replace: true,
                });
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
          <div className="flex gap-8 text-center">
            <a>Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
