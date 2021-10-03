import React from "react";
import { actions } from "./actions";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Search } from "components";
import { mapStyles } from "./mapStyles";
import { callApi } from "api";
import toast from "react-hot-toast";
import { themed } from "components/ToastAlert";
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
  React.useEffect(() => {
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
          },
        });
        dispatch({
          type: actions.SET_LOCATION,
          payload: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
      }
    });
  }, []);
  const [myLocation, setMyLocation] = React.useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
    libraries,
  });
  const changeLocation = (lat, lng) => {
    toast.success("Location changed", { ...themed });
    dispatch({
      type: actions.SET_LOCATION,
      payload: {
        lat,
        lng,
      },
    });
    dispatch({
      type: actions.SET_ACTUAL_LOCATION,
      payload: {
        lat,
        lng,
      },
    });
    setTimeout(() => {
      dispatch({
        type: actions.SET_ZOOM,
        payload: {
          zoom: 15,
        },
      });
    }, 1000);
  };
  const handleSearch = (lat, lng) => {
    callApi(
      "/montly/",
      {
        REQUEST: actions.RESULTS_FETCH_REQUEST,
        SUCCESS: actions.RESULTS_FETCH_SUCCESS,
        FAILURE: actions.RESULTS_FETCH_FAILURE,
      },
      {
        longitude: lng,
        latitude: lat,
        start: 2018,
        end: 2018,
      },
      dispatch
    );
  };
  return (
    <div
      style={{ marginTop: "13vh", overflowX: "hidden", textAlign: "center" }}
    >
      <h4>Get information about sunshine in your area.</h4>
      <br />
      <h3>Select your location</h3>
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
            <button
              className="my_button"
              disabled={state.request.loading || state.location.lat === null}
              onClick={() => {
                dispatch({
                  type: actions.SET_LOCATION,
                  payload: myLocation,
                });
                dispatch({
                  type: actions.SET_ACTUAL_LOCATION,
                  payload: myLocation,
                });
              }}
            >
              Go to my location
            </button>
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
                handleSearch(e.latLng.lat(), e.latLng.lng());
              }
            }}
            center={state.actualLocation}
          >
            <Marker key={state.actualLocation.lat} position={state.location} />
          </GoogleMap>
          <div className="next_step_container">
            <button
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
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
