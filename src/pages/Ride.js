import React, { useState } from "react";

function Ride() {
  const [fromAddress, setFromAddress] = useState({
    from_doorno: "",
    from_street: "",
    from_city: "",
    from_pincode: "",
  });
  const [toAddress, setToAddress] = useState({
    to_doorno: "",
    to_street: "",
    to_city: "",
    to_pincode: "",
  });

  const { from_doorno, from_street, from_city, from_pincode } = fromAddress;
  const { to_doorno, to_street, to_city, to_pincode } = toAddress;

  const handleFromAddressChange = (e) => {
    setFromAddress({ ...fromAddress, [e.target.id]: e.target.value });
  };
  const handleToAddressChange = (e) => {
    setToAddress({ ...toAddress, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(fromAddress);
    console.log(toAddress);
  };

  return (
    <section className="align-middle p-10 h-screen">
      {/* Main Wrapper */}
      <form onSubmit={onSubmit}>
        <div className="flex flex-col px-12 bg-gray-200 space-y-5 items-center md:flex-row md:justify-between rounded-xl shadow-2xl mt-12">
          {/* From Fields Container */}
          <div className="p-6 md:w-1/2">
            <h1 className="font-semibold text-xl my-2">From Address</h1>
            <label className="text-lg font-medium">Door/House No.</label> <br />
            <input
              className="flex-1 px-4 py-2 rounded-full focus:outline-none my-2"
              type="text"
              id="from_doorno"
              value={fromAddress.from_doorno}
              placeholder="Enter Door/House number"
              onChange={handleFromAddressChange}
              maxLength="10"
              required
            />{" "}
            <br />
            <label className="text-lg font-medium">Street Name</label> <br />
            <input
              className="flex-1 px-4 py-2 rounded-full focus:outline-none my-2"
              type="text"
              placeholder="Enter your street name"
              id="from_street"
              value={fromAddress.from_street}
              onChange={handleFromAddressChange}
              required
            />{" "}
            <br />
            <label className="text-lg font-medium">City Name</label> <br />
            <input
              className="flex-1 px-4 py-2 rounded-full focus:outline-none my-2"
              type="text"
              placeholder="Enter city name"
              id="from_city"
              value={fromAddress.from_city}
              onChange={handleFromAddressChange}
              required
            />{" "}
            <br />
            <label className="text-lg font-medium">Pincode</label> <br />
            <input
              className="flex-1 px-4 py-2 rounded-full focus:outline-none my-2"
              type="text"
              placeholder="Enter pincode"
              id="from_pincode"
              maxLength="10"
              value={fromAddress.from_pincode}
              onChange={handleFromAddressChange}
              required
            />{" "}
            <br />
          </div>
          {/* From Fields container Ends here */}
          {/* To Fields Container */}
          <div className="p-6 md:w-1/2">
            <h1 className="font-semibold text-xl my-2">To Address</h1>
            <label className="text-lg font-medium">Door/House No.</label> <br />
            <input
              className="flex-1 px-4 py-2 rounded-full focus:outline-none my-2"
              type="text"
              id="to_doorno"
              value={toAddress.to_doorno}
              placeholder="Enter Door/House number"
              onChange={handleToAddressChange}
              maxLength="10"
              required
            />{" "}
            <br />
            <label className="text-lg font-medium">Street Name</label> <br />
            <input
              className="flex-1 px-4 py-2 rounded-full focus:outline-none my-2"
              type="text"
              placeholder="Enter your street name"
              id="to_street"
              value={toAddress.to_street}
              onChange={handleToAddressChange}
              required
            />{" "}
            <br />
            <label className="text-lg font-medium">City Name</label> <br />
            <input
              className="flex-1 px-4 py-2 rounded-full focus:outline-none my-2"
              type="text"
              placeholder="Enter city name"
              id="to_city"
              value={toAddress.to_city}
              onChange={handleToAddressChange}
              required
            />{" "}
            <br />
            <label className="text-lg font-medium">Pincode</label> <br />
            <input
              className="flex-1 px-4 py-2 rounded-full focus:outline-none my-2"
              type="text"
              placeholder="Enter pincode"
              id="to_pincode"
              maxLength="10"
              value={toAddress.to_pincode}
              onChange={handleToAddressChange}
              required
            />
            <br />
          </div>
          {/* To Fields container Ends here */}
        </div>
        <button
          type="submit"
          className="bg-black px-5 py-2 text-white rounded-xl my-4 place-content-center"
        >
          Book Ride
        </button>
      </form>
    </section>
  );
}

export default Ride;
