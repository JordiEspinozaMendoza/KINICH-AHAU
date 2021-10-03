export const initialState = {
  actualScreen: "formParameters",
  typeDate: "hour",
  location: {
    lat: 0,
    lng: 0,
  },
  actualLocation: {
    lat: 0,
    lng: 0,
  },
  zoom: 4,
  request: {
    loading: false,
    success: false,
    error: null,
    data: null,
  },
  fetchData: {
    startDate: "",
    endDate: "",
  },
};
