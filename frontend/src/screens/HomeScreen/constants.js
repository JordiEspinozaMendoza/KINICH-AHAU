export const initialState = {
  actualScreen: 'selectLocation',
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
};
