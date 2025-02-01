import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Import the CSS file
import { Toaster, toast } from "react-hot-toast";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
        toast.error("Please enter both email and password.");
      return;
    }
    toast.success("Login Successful! Redirecting...");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left Side - Image */}
        <div className="login-image">
          <img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" alt="Login Illustration" />
          <div className="background-shapes"></div>
        </div>

        {/* Right Side - Form */}
        <div className="login-form">
          <h1>Krithin Plaza</h1>
          <h2>Admin Login</h2>

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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button onClick={handleLogin} className="login-button">
            LOGIN
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
