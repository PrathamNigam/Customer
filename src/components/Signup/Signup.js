import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();

  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form default behavior

    try {
      // Send POST request to backend API
      const response = await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });

      // Handle successful signup
      if (response.status === 201) {
        // Redirect to the sign-in page
        navigate('/signin');
      }
    } catch (err) {
      console.error('Error signing up:', err.response?.data?.message || err.message);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-slate-50 overflow-x-hidden"
      style={{
        fontFamily: 'Manrope, "Noto Sans", sans-serif',
      }}
    >
      <div className="layout-container flex flex-col items-center w-full max-w-[512px] py-5 px-4">
        <h1 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] text-left pb-3 pt-5">
          Sign up for a new account
        </h1>

        {/* Name Input */}
        <div className="flex w-full max-w-[480px] flex-wrap gap-4 py-3">
          <label className="flex flex-col w-full">
            <p className="text-[#0d151c] text-base font-medium leading-normal pb-2">Name</p>
            <input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input w-full rounded-xl h-14 p-4 text-[#0d151c] bg-[#e7eef4] placeholder:text-[#49779c] focus:outline-none"
            />
          </label>
        </div>

        {/* Email Input */}
        <div className="flex w-full max-w-[480px] flex-wrap gap-4 py-3">
          <label className="flex flex-col w-full">
            <p className="text-[#0d151c] text-base font-medium leading-normal pb-2">Email Address</p>
            <input
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input w-full rounded-xl h-14 p-4 text-[#0d151c] bg-[#e7eef4] placeholder:text-[#49779c] focus:outline-none"
            />
          </label>
        </div>

        {/* Password Input */}
        <div className="flex w-full max-w-[480px] flex-wrap gap-4 py-3">
          <label className="flex flex-col w-full">
            <p className="text-[#0d151c] text-base font-medium leading-normal pb-2">Password</p>
            <input
              type="password"
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input w-full rounded-xl h-14 p-4 text-[#0d151c] bg-[#e7eef4] placeholder:text-[#49779c] focus:outline-none"
            />
          </label>
        </div>

        {/* Sign Up Button */}
        <div className="flex w-full max-w-[480px] py-3">
          <button
            onClick={handleSubmit}
            className="flex w-full justify-center items-center h-10 rounded-xl bg-[#2094f3] text-white font-bold"
          >
            Sign up
          </button>
        </div>

        {/* Already have an account link */}
        <p
          className="text-[#49779c] text-sm py-1 underline cursor-pointer"
          onClick={() => navigate('/signin')}
        >
          Already have an account?
        </p>
      </div>
    </div>
  );
}

export default SignUp;
