import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const CustomMap = (props) => {
  const onMarkerClick = () => {};
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
    >
      <Marker onClick={onMarkerClick} name={"Current location"} />
    </Map>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyDQKWhsabLAnFqRLczDUAMHVRemXLhFG2E",
})(CustomMap);
