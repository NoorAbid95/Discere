import { Routes, Route } from "react-router-dom";
import Homepage from "../components/pages/Homepage";
import SignupPage from "../components/pages/SignupPage";
import LoginPage from "../components/pages/LoginPage";
import Dashboard from "../components/pages/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
