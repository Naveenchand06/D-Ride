import React from "react";
import Map from "react-map-gl";

const style = {
  main: `w-screen h-screen m-auto`,
};

function MapPage() {
  return (
    <div className={style.main}>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
        initialViewState={{
          longitude: 48.121,
          latitude: 9.141,
          zoom: 6,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}

export default MapPage;
