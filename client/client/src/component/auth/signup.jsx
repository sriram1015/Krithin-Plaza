import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Import the CSS file
import { Toaster, toast } from "react-hot-toast";

const LoginPage = () => {
  const [User,setUser]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number,setNumber]=useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    toast.error("Registered Successful! Redirecting...");
    navigate("/");
  };

  

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left Side - Image */}
        <div className="login-image">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-illustration-download-in-svg-png-gif-file-formats--account-forgot-security-password-access-lock-pack-crime-illustrations-3805752.png" alt="Login Illustration" />
          <div className="background-shapes"></div>
        </div>

        {/* Right Side - Form */}
        <div className="login-form">
          <h1>Krithin Plaza</h1>
          <h2>Create an Account</h2>

          <div className="input-group">
            <span className="icon">👤</span>
            <input
              type="name"
              placeholder="User Name"
              value={User}
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
          <div className="input-group">
            <span className="icon">📞</span>
            <input
              type="number"
              placeholder="Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button onClick={handleRegister} className="login-button">
            REGISTER
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
