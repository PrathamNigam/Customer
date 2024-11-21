// src/Components/SignIn/SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext'; // Import the useAuth hook

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from context

  const handleSignIn = () => {
    const isAuthenticated = email === 'admin@gmail.com' && password === 'admin'; // Dummy check

    if (isAuthenticated) {
      const initials = email.charAt(0).toUpperCase(); // Get first letter of email as initials
      login(initials); // Pass initials to the login function
      navigate('/search'); // Navigate to the search page on successful sign-in
    } else {
      alert('Invalid credentials, please try again.'); // Handle invalid credentials
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-slate-50">
      <div className="layout-container flex flex-col w-[512px] max-w-[512px] py-5 px-4">
        <h1 className="text-[#0d151c] text-[22px] font-bold text-center pb-3 pt-5">Sign in</h1>
        
        <div className="flex w-full gap-4 py-3">
          <label className="flex flex-col w-full">
            <p className="text-[#0d151c] text-base font-medium pb-2">Email address</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="form-input w-full rounded-xl h-14 p-4 text-[#0d151c] bg-[#e7eef4] placeholder:text-[#49779c] focus:outline-none"
            />
          </label>
        </div>
        
        <div className="flex w-full gap-4 py-3">
          <label className="flex flex-col w-full">
            <p className="text-[#0d151c] text-base font-medium pb-2">Password</p>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="•••••••••"
              className="form-input w-full rounded-xl h-14 p-4 text-[#0d151c] bg-[#e7eef4] placeholder:text-[#49779c] focus:outline-none"
            />
          </label>
        </div>

        <div className="py-3">
          <button
            onClick={handleSignIn} // Call sign-in logic on button click
            className="flex w-full justify-center items-center h-10 rounded-xl bg-[#2094f3] text-white font-bold"
          >
            Sign in
          </button>
        </div>

        <p className="text-[#49779c] text-sm py-1 underline cursor-pointer text-center" onClick={() => navigate('/signup')}>
          Don't have an account? Sign up
        </p>
      </div>
    </div>
  );
};

export default SignIn;
