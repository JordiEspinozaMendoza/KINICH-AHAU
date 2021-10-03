import React from "react";
import { Container, Form } from "react-bootstrap";
import { actions } from "./actions";
export function FormParameters({ state, dispatch }) {
  const [typeDate, setTypeDate] = React.useState("");
  const renderFormType = () => {
    switch (typeDate) {
      case "year":
        return (
          <>
            <Form.Group>
              <Form.Label>Select Year initial</Form.Label>
              <Form.Control type="number" placeholder="Enter Year initial" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Select Year final</Form.Label>
              <Form.Control type="number" placeholder="Enter Year final" />
            </Form.Group>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <Container className="form_parameters">
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
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group>
          <Form.Label>Select type of date</Form.Label>
          <Form.Control
            as="select"
            value={state?.typeDate}
            onChange={(e) => {
              setTypeDate(e.target.value);
            }}
          >
            <option value="">Select type</option>
            <option value="year">Year</option>
            <option value="month">Month</option>
            <option value="day">Day</option>
            <option value="hour">Hour</option>
          </Form.Control>
        </Form.Group>
        {renderFormType()}
      </Form>
    </Container>
  );
}
