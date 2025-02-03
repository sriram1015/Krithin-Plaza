import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./preloaderpage.jsx";
import LoginPage from "./component/auth/login.jsx";
import AdminPage from "./component/auth/adminsignin.jsx";
import SignupPage from "./component/auth/signup.jsx";
import Home from './component/Page/Home.jsx';
import UserDashboard from './component/Page/UserDashboard'; // Import the UserDashboard
import Setting from './component/Page/Setting'; // Import the Setting

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <Router>
          <UserDashboard> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/setting" element={<Setting />} /> 
            </Routes>
          </UserDashboard>
        </Router>
      )}
    </>
  );
};

export default App;
