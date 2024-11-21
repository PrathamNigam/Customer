import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef4] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0d151c]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em]">Support.io</h2>
      </div>
      <div className="flex gap-2">
        {/* Sign In Button */}
        <Link to="/signin">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#49779c] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Sign in</span>
          </button>
        </Link>

        {/* Sign Up Button */}
        <Link to="/signup">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7eef4] text-[#0d151c] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Sign up</span>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
