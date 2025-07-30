import React from 'react';
import {  Route, Routes, Link } from 'react-router-dom';
import {useAuthStore} from "./store/auth";
import LandingPage from './pages/LandingPage'
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyEmail from './pages/Verify'; 

function App() {
  const {isAuthenticated,user} =useAuthStore();
  return (
    <>
      <div className="p-4 text-center space-x-4">
        <Link to="/login" className="text-blue-500">Login</Link>
        <Link to="/signup" className="text-green-500">Sign Up</Link>
        <Link to="/verifyEmail" className="text-black">Verify Email</Link> 
        <Link to="/landingPage" className="text-black">Landing Page</Link> 
      </div>

      <Routes>
        <Route path="/login"
        element={
        isAuthenticated && user?.isVerified ? (
          <Navigate to ="/" />
        ) : ( 
        <Login />
        )
      } />
        <Route path="/signup" element={isAuthenticated && user?.isVerified?(<Navigate to="/" />):(<Signup />)} />
        <Route path="/verifyEmail"  element={<VerifyEmail />} /> 
        <Route path="/landingPage" element={<LandingPage />} /> 
      </Routes>
      </>
  );
}

export default App;