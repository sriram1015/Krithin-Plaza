import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./preloaderpage.jsx";
import LoginPage from "./component/auth/login.jsx";
import AdminPage from "./component/auth/adminsignin.jsx";
import SignupPage from "./component/auth/signup.jsx";
import Home from './component/Page/User/Home.jsx';
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
          <UserDashboard> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/adminsignup" element={<AdminPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/setting" element={<Setting />} /> 
            </Routes>
          </UserDashboard>
        </Router>
        </div>
      )}
    </>
  );
};

export default App;
