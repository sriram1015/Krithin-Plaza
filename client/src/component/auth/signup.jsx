import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import "./LoginPage.css"; 

const urlapi = "http://localhost:5002"; // Add your API endpoint

const RegisterPage = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
  
    if (!user || !email || !password || !number) {
      toast.error("⚠️ All fields are required!", { position: "top-center" });
      return;
    }
  
    try {
      const response = await axios.post(`${urlapi}/user/register`, {
        username: user,
        email,
        password,
        phone: number,
      });
  
      console.log("Response:", response.data); // Debugging
      toast.loading('Loading.....');
      toast.success("Registration successful! Redirecting...", {
        position: "top-center",
      });
  
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Registration Error:", error.response?.data || error.message);
      toast.error(` ${error.response?.data?.error || "Registration failed!"}`, {
        position: "top-center",
      });
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left Side - Image */}
        <div className="login-image">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-illustration-download-in-svg-png-gif-file-formats--account-forgot-security-password-access-lock-pack-crime-illustrations-3805752.png" alt="Register Illustration" />
          <div className="background-shapes"></div>
        </div>

        {/* Right Side - Form */}
        <div className="login-form">
          <h1>Krithin Plaza</h1>
          <h2>Create an Account</h2>

          {/* Username Input */}
          <div className="input-group">
            <span className="icon">👤</span>
            <input
              type="text"
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div className="input-group">
            <span className="icon">📧</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Phone Number Input */}
          <div className="input-group">
            <span className="icon">📞</span>
            <input
              type="tel"
              placeholder="Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          {/* Register Button */}
          <button onClick={handleRegister} className="login-button">
            REGISTER
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
