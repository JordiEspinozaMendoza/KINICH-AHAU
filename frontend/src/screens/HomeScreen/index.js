import React from "react";
import { Container } from "react-bootstrap";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import { SelectLocation } from "./selectLocation";
import { actions } from "./actions";
export default function HomeScreen() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  React.useEffect(() => {
    dispatch({
      type: actions.RESET_STATE,
    });
  }, []);
  const renderScreen = () => {
    switch (state.actualScreen) {
      case "selectLocation":
        return <SelectLocation state={state} dispatch={dispatch} />;
      default:
        return null;
    }
  };
  return <Container>{renderScreen()}</Container>;
}
