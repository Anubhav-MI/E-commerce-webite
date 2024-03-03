import React from "react";
import signimg from "../Images/sign up image.png";
import icon from "../Images/googleicon.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="flex">
        <div>
          <img className="h-4/6" src={signimg} width={1100} alt=".." />
        </div>
        <div className="flex flex-col pt-16 px-16 gap-8">
          <h2 className="font-normal text-5xl">Create an account</h2>
          <p>Enter your deatils below</p>
          <div class="form-floating mb-3">
            <input
              type="name"
              class="form-control"
              id="floatingInput"
              placeholder="Enter your name"
            />
            <label for="floatingInput">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="contact"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address or Phone number</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button type="button" class="btn btn-outline-secondary min-h-16">
            Create Account
          </button>
          <GoogleOAuthProvider clientId="189418374010-d61841o55g1nhhaqj73pov0o38v2dld2.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log(decoded);
                // console.log(credentialResponse);
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
            <p>Already have an account?</p>
            <a href="/Login">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
