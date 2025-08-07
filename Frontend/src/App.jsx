import React, { useEffect } from 'react';
import {  Route, Routes, Link, Navigate } from 'react-router-dom';
import {useAuthStore} from "./store/auth";
import LandingPage from './pages/LandingPage'
import LoadingSpinner from './components/LoadingSpinner';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyEmail from './pages/Verify'; 

function App() {
  const { isCheckingAuth,checkAuth,isAuthenticated,user} =useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log(isCheckingAuth,'gg')

  if(isCheckingAuth) return <LoadingSpinner/>;
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
        <Route path="/landingPage" element={
          !isAuthenticated ?(
            <Navigate to = '/login' />
          ) : !user?.isVerified ? (
            <Navigate to = '/verifyEmail' />
          ) : (
          <LandingPage />
          )
        } /> 
  
      </Routes>
      </>
  );
}

export default App;