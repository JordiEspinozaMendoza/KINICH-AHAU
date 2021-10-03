import { API_URL } from "./apiUrl";
import axios from "axios";
export async function callApi(url, actions, body, dispatch) {
  console.log(body)
  const { REQUEST, SUCCESS, FAILURE } = actions;
  console.log("callApi", url);
  try {
    dispatch({
      type: REQUEST,
    });

    const { data } = await axios({
      method: "POST",
      url: API_URL + url,
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
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
  }
}
