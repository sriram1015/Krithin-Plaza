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
      toast.success("login failed....!", {
        position: "top-center",
      });
      return;
    }
    toast.success("Login Successful! redirecting....", {
      position: "top-center",
    });
  };

  const handleAdmin = () => {
    navigate("/admin");
  };

  const handleRegister = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left Side - Image */}
        <div className="login-image">
          <img src="https://www.pngall.com/wp-content/uploads/15/Login-PNG-HD-Image.png" alt="Login Illustration" />
          <div className="background-shapes"></div>
        </div>

        {/* Right Side - Form */}
        <div className="login-form">
          <h1>Krithin Plaza</h1>
          <h2>Member Login</h2>

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

          {/* Forgot Password */}
          <p className="forgot-link">
            <button onClick={handleAdmin} className="login-admin">ADMIN?</button>
          </p>

          {/* Create Account */}
          <p className="create-account">
            <button onClick={handleRegister} className="login-create">Create an Account →</button>
          </p>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
