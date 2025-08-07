import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/signup', { name, email, password });
      setUser(res.data.user);
      navigate('/feed');
    } catch {
      alert('Signup failed');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Signup</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <input type="text" placeholder="Name" className="input input-bordered w-full" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="input input-bordered w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-primary w-full" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
