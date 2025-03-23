import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import "./LoginPage.css";
import { signInWithEmailAndPassword }  from "firebase/auth";
import { auth } from "./Firebase";
const urlapi = "http://localhost:5002"; // API Endpoint

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful! Redirecting...");
      toast.success("Login successful! Redirecting...");
      setTimeout(() => navigate("/profile"), 2000);
    }catch(error){
      console.log(error);
      toast.error(` ${error.response?.data?.error || "Login failed!"}`, {
        position: "top-center",
      });
    }
    // if (!email || !password) {
    //   toast.error("⚠️ Please enter both email and password!");
    //   return;
    // }

    // try {
    //   const response = await axios.post(`${urlapi}/user/login`, {
    //     email: email.toLowerCase(),
    //     password,
    //   });

    //   console.log("Login response:", response.data); // Debugging
    //   toast.loading("Loading...");

    //   if (response.data.success) {
    //     // Store email in localStorage
    //     localStorage.setItem("userEmail", email.toLowerCase());
    //     toast.success("Login successful! Redirecting...");
    //     setTimeout(() => navigate("/profile"), 2000);
    //   } else {
    //     toast.error(response.data.message || "Invalid credentials! Try again.");
    //   }
    // } catch (error) {
    //   console.error("Login Error:", error.response?.data || error.message);
    //   toast.error("Login failed! Please check your credentials.");
    // }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-image">
          <img
            src="https://www.pngall.com/wp-content/uploads/15/Login-PNG-HD-Image.png"
            alt="Login"
          />
        </div>

        <div className="login-form">
          <h1>Krithin Plaza</h1>
          <h2>Member Login</h2>

          <div className="input-group">
            <span className="icon">📧</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button onClick={handleLogin} className="login-button">
            LOGIN
          </button>

          <p className="create-account">
            <button
              onClick={() => navigate("/signup")}
              className="login-create"
            >
              Create an Account →
            </button>
          </p>

          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;