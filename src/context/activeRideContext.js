import React, { createContext, useState, useEffect } from "react";

const ActiveRidesContext = createContext();

export const ActiveRidesProvider = ({ children }) => {
  const [activeRides, setActiveRides] = useState([
    {
      fromAddress: {
        from_doorno: "28",
        from_street: "Sunnambukara Street",
        from_city: "Madurai",
        from_pincode: "625001",
      },
      toAddress: {
        to_doorno: "128",
        to_street: "madurai to sivagangai road",
        to_city: "Madurai",
        to_pincode: "625127",
      },
      status: "Processing...",
      done: false,
      amount: "Rs. 1000",
    },
  ]);

  const addNewRide = (newRide) => {
    setActiveRides([newRide, ...activeRides]);
  };

  return (
    <ActiveRidesContext.Provider
      value={{
        activeRides,
        addNewRide,
      }}
    >
      {children}
    </ActiveRidesContext.Provider>
  );
};

export default ActiveRidesContext;
