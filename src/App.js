import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Help from "./pages/Help";
import BookRide from "./pages/BookRide";
import { ToastContainer } from "react-toastify";
import { RideProvider } from "./context/rideContext";
import { ActiveRidesProvider } from "./context/activeRideContext";

import AllRides from "./pages/AllRides";
import ActiveRides from "./pages/ActiveRides";

function App() {
  return (
    <ActiveRidesProvider>
      <RideProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/book-ride" element={<BookRide />} />
            <Route path="/all-rides" element={<AllRides />} />
            <Route path="/active-rides" element={<ActiveRides />} />

            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <ToastContainer />
        </Router>
      </RideProvider>
    </ActiveRidesProvider>
  );
}
export default App;
