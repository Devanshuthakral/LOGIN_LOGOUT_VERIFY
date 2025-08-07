import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center mt-20">
    <h2 className="text-3xl font-bold text-red-500">404 - Page Not Found</h2>
    <p className="mt-4">Oops! The page you're looking for does not exist.</p>
    <Link to="/" className="btn btn-primary mt-4">Go Home</Link>
  </div>
);

export default NotFound;
