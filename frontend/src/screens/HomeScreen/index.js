import React from "react";
import { initialState } from "./constants";
import { reducer } from "./reducer";
import { SelectLocation } from "./selectLocation";
import { FormParameters } from "./form";
import { Results } from "./results";
export default function HomeScreen() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const renderScreen = () => {
    switch (state?.actualScreen) {
      case "selectLocation":
        return <SelectLocation state={state} dispatch={dispatch} />;
      case "formParameters":
        return <FormParameters state={state} dispatch={dispatch} />;
      case "results":
        return <Results state={state} dispatch={dispatch} />;
      default:
        return <SelectLocation state={state} dispatch={dispatch} />;
    }
  };
  return <>{renderScreen()}</>;
}
