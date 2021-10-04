import { API_URL } from "./apiUrl";
import axios from "axios";
export async function callApi(url, actions, dispatch) {
  const { REQUEST, SUCCESS, FAILURE } = actions;
  console.log("callApi", url);
  try {
    dispatch({
      type: REQUEST,
    });

    const { data } = await axios({
      method: "GET",
      url: API_URL + url,

    });
    dispatch({
      type: SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: FAILURE,
      payload: e,
    });
    throw e.response?.data ? e.response.data : e.message;

  }
}
