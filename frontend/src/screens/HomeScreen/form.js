import { Form } from "react-bootstrap";
import { actions } from "./actions";
export function FormParameters({ state, dispatch }) {
  return (
    <div className="form_parameters">
      <button
        onClick={() => {
          dispatch({
            type: actions.SET_SCREEN,
            payload: "selectLocation",
          });
        }}
        className="my_button mb-4"
      >
        Go back to the map
      </button>
      <h3>Parameters</h3>
      <Form></Form>
    </div>
  );
}
