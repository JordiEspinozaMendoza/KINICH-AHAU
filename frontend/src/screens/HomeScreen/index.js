import React from "react";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import { actions } from "./actions";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Search } from "components";
import { mapStyles } from "./mapStyles";
const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
export default function HomeScreen() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch({
        type: actions.SET_ACTUAL_LOCATION,
        payload: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
      dispatch({
        type: actions.SET_LOCATION,
        payload: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
  }, []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
    libraries,
  });
  const changeLocation = (lat, lng) => {
    dispatch({
      type: actions.SET_ACTUAL_LOCATION,
      payload: {
        lat,
        lng,
      },
    });
  };
  return (
    <div style={{ marginTop: "7vh", overflowX: "hidden", textAlign: "center" }}>
      <h5>Get information about sunshine in your area.</h5>
      {loadError ? (
        <div>Error al cargar el mapa</div>
      ) : !isLoaded ? (
        <div>Cargando mapa</div>
      ) : (
        <div className="map_container">
          <div className="search_container">
            <div className="search_input">
              <Search
                center={state.actualLocation}
                changeLocation={changeLocation}
              />
            </div>
          </div>
          <GoogleMap
            options={options}
            mapContainerStyle={mapContainerStyle}
            zoom={4}
            onClick={(e) => {
              dispatch({
                type: actions.SET_LOCATION,
                payload: {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng(),
                },
              });
            }}
            center={state.actualLocation}
          >
            <Marker key={state.actualLocation.lat} position={state.location} />
          </GoogleMap>
        </div>
      )}
    </div>
  );
}
