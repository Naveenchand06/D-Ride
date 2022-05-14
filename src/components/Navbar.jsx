import React from "react";
import { FaRedRiver, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="conatiner flex flex-row items-center justify-between p-2 px-8 bg-gray-700 text-white">
      {/* Logo */}
      <div className="prose text-xl font-semibold">
        <FaRedRiver className="inline-block mr-3" />
        D-Ride
      </div>

      {/* Menu Items */}
      <div className="flex space-x-6 text-sm">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/ride" className="hover:text-gray-400">
          Ride
        </Link>
        <Link to="/about" className="hover:text-gray-400">
          About
        </Link>
        <Link to="/help" className="hover:text-gray-400">
          Help
        </Link>
      </div>

      {/* Trailing Buttons */}
      <div className="flex items-center">
        {/* Ride button */}
        <Link
          to="/ride"
          className="mr-3 rounded-full bg-white p-2 px-6 text-black hover:text-gray-200 hover:bg-gray-400"
        >
          Ride now
        </Link>

        {/* Login Button */}
        <Link
          to="/"
          className="border-2 shadow-white flex items-center px-4 rounded-3xl py-1 hover:bg-slate-300 hover:text-black"
        >
          <FaUser className="mr-2" />
          <p>Login</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
