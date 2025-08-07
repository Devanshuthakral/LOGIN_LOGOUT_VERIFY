import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 px-4 shadow">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">CampusConnect</Link>
      </div>
      <div className="flex gap-4">
        {user ? (
          <>
            <Link to="/feed" className="btn btn-ghost">Feed</Link>
            <Link to={`/profile/${user._id}`} className="btn btn-ghost">Profile</Link>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
            <Link to="/signup" className="btn btn-primary btn-sm">Signup</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
