import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import CandidateDashboard from './components/candidate/CandidateDashboard';
import RecruiterDashboard from './components/recruiter/RecruiterDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import LoginPage from './components/LoginPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import ResetPasswordPage from './components/ResetPasswordPage';

export default function App() {
  const [userRole, setUserRole] = useState<'candidate' | 'recruiter' | 'admin' | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (role: 'candidate' | 'recruiter' | 'admin') => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUserRole(null);
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/login" 
          element={<LoginPage onLogin={handleLogin} />} 
        />
        <Route 
          path="/forgot-password" 
          element={<ForgotPasswordPage />} 
        />
        <Route 
          path="/reset-password" 
          element={<ResetPasswordPage />} 
        />
        <Route 
          path="/candidate/*" 
          element={
            isAuthenticated && userRole === 'candidate' ? 
              <CandidateDashboard onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
        <Route 
          path="/recruiter/*" 
          element={
            isAuthenticated && userRole === 'recruiter' ? 
              <RecruiterDashboard onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
        <Route 
          path="/admin/*" 
          element={
            isAuthenticated && userRole === 'admin' ? 
              <AdminDashboard onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
      </Routes>
    </Router>
  );
}
