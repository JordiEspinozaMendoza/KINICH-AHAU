import React from "react";
import { Graph, GraphArr } from "components";
import { Container } from "react-bootstrap";
import { radiation } from "utils/equations";
export const Results = ({ state, dispatch }) => {
  const [radiationResults, setRadiationResults] = React.useState([]);
  React.useEffect(() => {
    setRadiationResults(radiation(state.request.data?.parameter));
  }, []);
  return (
    <Container className="results">
      <h3>Results</h3>
      <span>
        Graph of the temperature levels for the selected period of time.
      </span>
      <Graph data={state.request.data?.parameter} />
      <span>
        Radiation levels for the selected period of time.
      </span>
      <GraphArr data={radiationResults} xName="name" name="radiation" />
    </Container>
  );
};
