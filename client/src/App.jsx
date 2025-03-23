import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";
import Preloader from "./preloaderpage.jsx";
import LoginPage from "./component/auth/Login.jsx";
import AdminPage from "./component/auth/adminsignin.jsx";
import SignupPage from "./component/auth/signup.jsx";
import Home from './component/Page/User/Home.jsx';
import UserDashboard from './component/Page/User/UserDashboard.jsx'; // Import the UserDashboard
import Setting from './component/Page/User/Setting.jsx'; // Import the Setting
import Profile from './component/Page/User/Profile.jsx'; // Import the Profile
import './App.css';
import { auth } from "./component/auth/Firebase";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(); // Track login status
  useEffect(() => {
    auth.onAuthStateChanged((isLoggedIn)=>{
      setIsLoggedIn(isLoggedIn);
    })
  }, []);
  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="app">
        <Router>
          <UserDashboard> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/adminsignup" element={<AdminPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={isLoggedIn ? <Navigate to="/" />:<LoginPage />} />
              <Route path="/setting" element={<Setting />} /> 
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </UserDashboard>
        </Router>
        </div>
      )}
    </>
  );
};

export default App;