import React, { createContext, useState, useEffect } from "react";

const RideContext = createContext();

export const RideProvider = ({ children }) => {
  const [isLoading, setIsLoad] = useState(false);
  const [rides, setRides] = useState([
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

  const bookRide = (newRide) => {
    setRides([newRide, ...rides]);
  };

  return (
    <RideContext.Provider
      value={{
        rides,
        isLoading,
        bookRide,
      }}
    >
      {children}
    </RideContext.Provider>
  );
};

export default RideContext;
