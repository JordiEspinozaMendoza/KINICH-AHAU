import React from "react";
import { Container } from "react-bootstrap";
import { actions } from "./actions";
import { callApi } from "api";
import {
  PrimaryButton,
  SecondaryButton,
  Header,
  Span,
  StyledForm as Form,
} from "components/styledComponents";
import toast from "react-hot-toast";
import { themed } from "components/ToastAlert";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const typeDateArray = [
  {
    value: "day",
    label: "Custom date",
  },
  {
    value: "month",
    label: "Month",
  },
  {
    value: "year",
    label: "Year",
  },
  {
    value: "oneDay",
    label: "One Day",
  },
];
export function FormParameters({ state, dispatch }) {
  const [typeDate, setTypeDate] = React.useState("day");
  const handleChange = (data) => {
    dispatch({
      type: actions.SET_FETCH_DATA,
      payload: {
        start: data.start,
        end: data.end,
        url: data.url,
      },
    });
  };
  const renderFormType = () => {
    switch (typeDate) {
      case "year":
        return (
          <>
            <Form.Group>
              <Form.Label>Select Year initial</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Year initial"
                onChange={(e) => {
                  handleChange({
                    start: e.target.value,
                    end: state.fetchData.end,
                    url: "yearly",
                  });
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Select Year final</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Year final"
                onChange={(e) => {
                  handleChange({
                    start: state.fetchData.start,
                    end: e.target.value,
                    url: "yearly",
                  });
                }}
              />
            </Form.Group>
          </>
        );
      case "month":
        return (
          <>
            <Form.Group>
              <Form.Label>Select year initial</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter year"
                id="year"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Select Month initial</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => {
                  var fullYear = document.getElementById("year").value;
                  var month =
                    e.target.value < 10 ? "0" + e.target.value : e.target.value;
                  handleChange({
                    start: fullYear + month+ "01",
                    end: state.fetchData.end,
                    url: "daily",
                  });
                }}
              >
                {months.map((month, index) => (
                  <option key={index} value={index + 1}>
                    {month}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Select Month final</Form.Label>
              <Form.Control
                as="select"
                as="select"
                onChange={(e) => {
                  var fullYear = document.getElementById("year").value;
                  var month =
                    e.target.value < 10 ? "0" + e.target.value : e.target.value;
                  handleChange({
                    start: state.fetchData.start,
                    end: fullYear + month+ "01",
                    url: "daily",
                  });
                }}
              >
                {months.map((month, index) => (
                  <option key={index} value={index + 1}>
                    {month}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </>
        );
      case "day":
        return (
          <>
            <Form.Group>
              <Form.Label>Select Day initial</Form.Label>
              <Form.Control
                type="date"
                onSelect={(e) => {
                  var fullYear = new Date(e.target.value).getFullYear();
                  var month = new Date(e.target.value).getMonth() + 1;
                  var day = new Date(e.target.value).getDate();

                  var formattedMonth = month < 10 ? "0" + month : month;
                  var formattedDay = day < 10 ? "0" + day : day;
                  handleChange({
                    start: `${fullYear}${formattedMonth}${
                      Math.abs(formattedDay) + 1
                    }`,
                    end: state.fetchData.end,
                    url: "daily",
                  });
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Select Day final</Form.Label>
              <Form.Control
                type="date"
                onSelect={(e) => {
                  var fullYear = new Date(e.target.value).getFullYear();
                  var month = new Date(e.target.value).getMonth() + 1;
                  var day = new Date(e.target.value).getDate();

                  var formattedMonth = month < 10 ? "0" + month : month;
                  var formattedDay = day < 10 ? "0" + day : day;

                  handleChange({
                    start: state.fetchData.start,
                    end: `${fullYear}${formattedMonth}${
                      Math.abs(formattedDay) + 1
                    }`,
                    url: "daily",
                  });
                }}
              />
            </Form.Group>
          </>
        );
      case "oneDay":
        return (
          <>
            <Form.Group>
              <Form.Label>Select Day</Form.Label>
              <Form.Control
                type="date"
                onSelect={(e) => {
                  var fullYear = new Date(e.target.value).getFullYear();
                  var month = new Date(e.target.value).getMonth() + 1;
                  var day = new Date(e.target.value).getDate();

                  var formattedMonth = month < 10 ? "0" + month : month;
                  var formattedDay = day < 10 ? "0" + day : day;

                  handleChange({
                    start: `${fullYear}${formattedMonth}${
                      Math.abs(formattedDay) + 1
                    }`,
                    end: `${fullYear}${formattedMonth}${
                      Math.abs(formattedDay) + 1
                    }`,
                    url: "daily",
                  });
                }}
              />
            </Form.Group>
          </>
        );
      default:
        return null;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      callApi(
        `?start=${state.fetchData.start}&end=${state.fetchData.end}&latitude=${state.location.lat}&longitude=${state.location.lng}&resolution=${state.fetchData.url}&comunity=SB`,
        {
          REQUEST: actions.RESULTS_FETCH_REQUEST,
          SUCCESS: actions.RESULTS_FETCH_SUCCESS,
          FAILURE: actions.RESULTS_FETCH_FAILURE,
        },
        dispatch
      ),
      {
        loading: "Loading...",
        success: "Success!",
        error: "There was an error, please try again.",
      },
      { ...themed }
    );
  };
  React.useEffect(() => {
    if (state.request.success) {
      dispatch({
        type: actions.SET_SCREEN,
        payload: "results",
      });
    }
  }, [state.request.success]);
  return (
    <Container className="form_parameters">
      <PrimaryButton
        onClick={() => {
          dispatch({
            type: actions.SET_SCREEN,
            payload: "selectLocation",
          });
        }}
        className="my_button mb-4"
      >
        Go back to the map
      </PrimaryButton>
      <Header modifiers={["h3"]}>Parameters</Header>
      <Span>
        Select the type of date you want to see the data of the sunshine
      </Span>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Select type of date</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => {
              setTypeDate(e.target.value);
              dispatch({
                type: actions.RESET_FETCH_DATA,
              });
            }}
          >
            {typeDateArray.map((type, index) => (
              <option
                key={index}
                value={type.value}
                selected={state.typeDate === type.value}
              >
                {type.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {renderFormType()}
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
        {state.location.lng != 0 ? (
          <SecondaryButton
            className="my_button mt-4"
            type="submit"
            disabled={state.request.loading}
          >
            Submit parameters
          </SecondaryButton>
        ) : (
          <SecondaryButton
            className="my_button mt-4"
            onClick={() => {
              dispatch({
                type: actions.SET_SCREEN,
                payload: "selectLocation",
              });
            }}
          >
            Please select a location on the map
          </SecondaryButton>
        )}
      </Form>
    </Container>
  );
}
