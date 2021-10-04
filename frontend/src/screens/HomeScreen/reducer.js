import { initialState } from "./constants";
import { actions } from "./actions";
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ZOOM:
      return {
        ...state,
        zoom: action.payload.zoom,
      };
    case actions.SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case actions.SET_ACTUAL_LOCATION:
      return {
        ...state,
        actualLocation: action.payload,
      };
    case actions.RESULTS_FETCH_REQUEST:
      return {
        ...state,
        request: {
          ...state.request,
          loading: true,
        },
      };
    case actions.RESULTS_FETCH_SUCCESS:
      return {
        ...state,
        request: {
          ...state.request,
          loading: false,
          success: true,
          data: action.payload,
        },
      };
    case actions.RESULTS_FETCH_FAILURE:
      return {
        ...state,
        request: {
          ...state.request,
          loading: false,
          success: false,
          error: action.payload,
        },
      };
    case actions.RESET_STATE:
      return {
        ...initialState,
      };
    case actions.SET_SCREEN:
      return {
        ...state,
        actualScreen: action.payload,
        request:{
          ...state.request,
          success: false,
        }
      };
    case actions.SET_FETCH_DATA:
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          ...action.payload,
        },
      };
    case actions.RESET_FETCH_DATA:
      return {
        ...state,
        fetchData: {
          ...initialState.fetchData,
        },
      };
  }
};
