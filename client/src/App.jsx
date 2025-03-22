import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./preloaderpage.jsx";
import LoginPage from "./component/auth/Login.jsx";
import AdminPage from "./component/auth/adminsignin.jsx";
import SignupPage from "./component/auth/signup.jsx";
import Home from './component/Page/User/Home.jsx';
import AdminDashboard from "./component/Page/Admin/AdminDashboard.jsx";
import UserDashboard from './component/Page/User/UserDashboard.jsx'; // Import the UserDashboard
import Setting from './component/Page/User/Setting.jsx'; // Import the Setting
import './App.css';
const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        
        <div className="app">
        <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/adminsignup" element={<AdminPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/setting" element={<Setting />} /> 
            </Routes>
          
        </Router>
        </div>
      )}
    </>
  );
};

export default App;
