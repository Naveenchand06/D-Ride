import React, { useEffect, useContext } from "react";
import RideContext from "../context/rideContext";

function AllRides() {
  const { rides } = useContext(RideContext);

  useEffect(() => {
    console.log(rides);
  }, []);

  return (
    <div className="container p-5 mx-auto">
      <h1 className="text-lg font-semibold my-5">All Rides</h1>
      {rides.map((ride, index) => {
        return (
          <div
            key={index}
            className="px-8 py-4 bg-gray-200 rounded-xl my-3 flex flex-row items-center justify-between
            "
          >
            {/* First Item */}
            <div>
              <h3 className="font-bold">From</h3>
              <p>{ride.fromAddress.from_street}</p>
              <p>
                {ride.fromAddress.from_city} - {ride.fromAddress.from_pincode}
              </p>
              <h3 className="font-bold">To</h3>
              <p>{ride.toAddress.to_street}</p>
              <p>
                {ride.toAddress.to_city} - {ride.toAddress.to_pincode}
              </p>
            </div>
            {/* Second Item */}
            <div>
              <h1>{ride.amount}</h1>
              <h1>{ride.status}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllRides;
