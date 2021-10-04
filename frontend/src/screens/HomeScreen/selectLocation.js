import React from "react";
import { actions } from "./actions";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Search } from "components";
import { mapStyles } from "./mapStyles";
import { PrimaryButton, Header } from "components/styledComponents";
import toast from "react-hot-toast";
import { themed } from "components/ToastAlert";
import sunLogo from "assets/logos/sun.png";
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

export const SelectLocation = ({ state, dispatch }) => {
  const [myLocation, setMyLocation] = React.useState();

  React.useEffect(() => {
    setMyLocationToMap();
  }, []);
  const setMyLocationToMap = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (state.location.lat == 0) {
        setMyLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        dispatch({
          type: actions.SET_ACTUAL_LOCATION,
          payload: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            nameLocation: "My Location",
          },
        });
        dispatch({
          type: actions.SET_LOCATION,
          payload: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            nameLocation: "My Location",
          },
        });
      }
    });
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
    libraries,
  });
  const changeLocation = (lat, lng, nameLocation = "") => {
    toast.success("Location changed", { ...themed });
    dispatch({
      type: actions.SET_LOCATION,
      payload: {
        lat,
        lng,
        nameLocation,
      },
    });
    dispatch({
      type: actions.SET_ACTUAL_LOCATION,
      payload: {
        lat,
        lng,
        nameLocation,
      },
    });
    setTimeout(() => {
      dispatch({
        type: actions.SET_ZOOM,
        payload: {
          zoom: 15,
        },
      });
    }, 200);
  };

  return (
    <div
      style={{ marginTop: "13vh", overflowX: "hidden", textAlign: "center" }}
    >
      <Header modifiers={["h3"]}>
        Get information about sunshine in your area.
      </Header>
      <br />
      <Header modifiers={["h4"]}>Select your location on the map</Header>
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
            <PrimaryButton
              className="my_button small_button"
              disabled={state.request.loading || state.location.lat === null}
              onClick={() => {
                setMyLocationToMap();
              }}
            >
              Go to my location
            </PrimaryButton>
          </div>
          <GoogleMap
            options={options}
            mapContainerStyle={mapContainerStyle}
            zoom={state.zoom}
            onClick={(e) => {
              if (!state.request.loading) {
                toast.success("Location changed", { ...themed });
                dispatch({
                  type: actions.SET_LOCATION,
                  payload: {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng(),
                  },
                });
              }
            }}
            center={state.actualLocation}
          >
            <Marker
              key={state.actualLocation.lat}
              position={state.location}
              icon={{
                url: sunLogo,
                scaledSize: new window.google.maps.Size(50, 50),
              }}
            />
          </GoogleMap>
          <div className="next_step_container">
            <PrimaryButton
              className="my_button"
              disabled={state.request.loading || state.location.lat === null}
              onClick={() => {
                dispatch({
                  type: actions.SET_SCREEN,
                  payload: "formParameters",
                });
              }}
            >
              Next step
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
};
