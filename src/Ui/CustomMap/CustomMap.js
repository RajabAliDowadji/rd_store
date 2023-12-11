import React, { useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const CustomMap = (props) => {
  const onMarkerClick = () => {
    console.log("Abdeali");
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(getCurrentPoistion);
    }
  }, []);

  const getCurrentPoistion = (position) => {
    console.log("position", position);
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={{
        width: "100%",
        height: "300px",
      }}
      containerStyle={{
        position: "relative",
        width: "100%",
        height: "300px",
      }}
      initialCenter={{
        lat: 23.022505,
        lng: 72.5713621,
      }}
    >
      <Marker onClick={onMarkerClick} name={"Current location"} />
    </Map>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyD_C3gFzZufo9qNc3LdRvQhgsWf8ByKzYA",
})(CustomMap);
