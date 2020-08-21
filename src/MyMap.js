import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "reactstrap";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 20.5937, lng: -78.9629 }}
    />
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MyMap() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

      <div>
        <Link to="/post">
          <Button> Post Your Ad </Button>
        </Link>
      </div>
    </div>
  );
}
