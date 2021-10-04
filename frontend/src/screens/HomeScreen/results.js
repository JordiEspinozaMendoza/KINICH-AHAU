import React from "react";
import { Graph, GraphArr, PrimaryButton, Header, Span } from "components";
import { Container, Dropdown } from "react-bootstrap";
import { radiation } from "utils/equations";
import { actions } from "./actions";
export const Results = ({ state, dispatch }) => {
  const [res, setRes] = React.useState([]);
  const [selectedRadiation, setSelectedRadiation] = React.useState("");
  const [allRadiations, setAllRadiations] = React.useState([]);
  const [ages, setAges] = React.useState([]);

  React.useEffect(() => {
    console.log(state.fetchData);
    Object.keys(state.request.data).map((key, index) => {
      Object.keys(state.request.data[key]).map((key2) => {
        Object.keys(state.request.data[key][key2]).map((key3) => {
          console.log(state.request.data[key][key2][key3]);
          setAllRadiations((allRadiations) => [
            ...allRadiations,
            state.request.data[key][key2][key3].title,
          ]);
          var arr = [];
          state.request.data[key][key2][key3].values.map((value, index) => {
            arr.push({
              value: value,
              name: Math.floor(state.fetchData.start.substring(0, 4)) + index,
            });
          });
          setRes((prev) => [...prev, arr]);
        });
      });
    });
  }, []);

  return (
    <Container className="results">
      <PrimaryButton
        className="my_button mb-4"
        onClick={() =>
          dispatch({ type: actions.SET_SCREEN, payload: "formParameters" })
        }
      >
        Go back
      </PrimaryButton>
      <Header modifiers={["h3"]}>Results</Header>

      {state.location.nameLocation != "" && (
        <Span>
          <b>Location:</b>{" "}
          {state.location.nameLocation
            ? state.location.nameLocation
            : "No location name"}
        </Span>
      )}

      <br />
      <Span>
        <b>Current coordinates selected:</b>
        <br />
        <b>Latitude: </b>
        {state.location.lat}
        <br />

        <b>Longitude: </b>
        {state.location.lng}
      </Span>
      <br />

      <div className="mt-4"></div>
      <Span>
        <b>Please select the radiation you want to see:</b>
      </Span>
      <select
        className="custom-select"
        onChange={(e) => setSelectedRadiation(e.target.value)}
      >
        <option value="">Select radiation</option>
        {allRadiations.map((radiation, index) => (
          <option value={radiation} key={index}>
            {radiation}
          </option>
        ))}
      </select>
      <br />
      <Span>Radiation levels for the selected period of time.</Span>
      {res.map((state, index) => (
        <div
          key={index}
          className={
            selectedRadiation == allRadiations[index] ? "d-block" : "d-none"
          }
        >
          <GraphArr data={state} xName="name" name="value" />
        </div>
      ))}
    </Container>
  );
};
