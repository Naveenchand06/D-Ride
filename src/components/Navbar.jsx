import React from "react";
import { FaRedRiver } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="conatiner flex flex-row items-center justify-between p-2 px-8 bg-gray-700 text-white">
      {/* Logo */}
      <div className="text-xl">
        <FaRedRiver className="inline-block mr-3" />
        DecentRide
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
    </nav>
  );
}

export default Navbar;
