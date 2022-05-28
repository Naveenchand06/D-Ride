import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { FaRedRiver, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  useEffect(() => {
    requestAccounts();
  }, []);

  const [walletAddress, setWalletAddress] = useState("");

  const requestAccounts = async () => {
    // console.log("Requesting Accounts....");
    // Check if meta mask exists
    if (window.ethereum) {
      // console.log("Detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // console.log(accounts);
        setWalletAddress(accounts[0]);
      } catch (e) {
        console.log("Error Connecting");
        console.log(e);
      }
    } else {
      toast.error("Please install metamask to use this application");
      console.log("Metamask does not exist");
    }
  };

  const connectWallet = async () => {
    if (typeof window.ethereum != undefined) {
      await requestAccounts();
      // Can use this provider to interact with ethereum
      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  };

  return (
    <nav className="conatiner mx-auto flex flex-row items-center justify-between p-2 px-8 bg-gray-700 text-white">
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
        {/* <Link to="/ride" className="hover:text-gray-400">
          Ride
        </Link> */}
        <Link to="/about" className="hover:text-gray-400">
          About
        </Link>
        {/* <Link to="/help" className="hover:text-gray-400">
          Help
        </Link> */}
        <Link to="/all-rides" className="hover:text-gray-400">
          All Rides
        </Link>
        <Link to="/active-rides" className="hover:text-gray-400">
          Active Rides
        </Link>
      </div>

      {/* Trailing Buttons */}
      <div className="flex items-center space-x-10">
        {/* Ride button */}
        <Link
          to="/book-ride"
          className="mr-3 rounded-full bg-white p-1 px-3 text-sm text-black hover:text-gray-200 hover:bg-gray-400"
        >
          Book Ride
        </Link>

        {/* Login Button */}
        {walletAddress === "" ? (
          <div
            onClick={requestAccounts}
            className="border-2 shadow-white flex items-center px-4 rounded-3xl py-1 hover:bg-slate-300 hover:text-black"
          >
            <FaUser className="mr-2" />
            <p>Login</p>
          </div>
        ) : (
          <h1>
            {walletAddress.substring(0, 6)}...{walletAddress.substring(38, 42)}
          </h1>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
