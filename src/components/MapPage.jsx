import React from "react";
import Map from "react-map-gl";

// const style = {
//   main: `w-screen h-screen m-auto`,
// };

function MapPage() {
  return (
    <div className="w-screen mx-auto h-screen px-1">
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: 78.119774,
          latitude: 9.925201,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}

export default MapPage;
