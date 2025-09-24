import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Nav() {
  return (
    <nav className="bg-white px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">📄</span>
          </div>
          <span className="text-xl font-semibold text-gray-800">DocMind</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            History
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            About
          </a>
        </div>

        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
          Get Started
        </button> */}
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
