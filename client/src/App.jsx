import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./preloaderpage.jsx";
import LoginPage from "./component/auth/login.jsx";
import AdminPage from "./component/auth/adminsignin.jsx";
import SignupPage from "./component/auth/signup.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
