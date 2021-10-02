import { initialState } from "./constants";
import { actions } from "./actions";
export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
  }
};
