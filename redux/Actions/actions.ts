import axios from "axios";
import { GET_NEWS, ERROR_NEWS, LOADING } from "./types";

export const getNews = (searchData) => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://newsapi.org/v2/everything?" +
        `q=${searchData}&` +
        "from=2020-10-07&" +
        "sortBy=popularity&" +
        "apiKey=b2515663b65c4bd790035d61eefa21ed"
    );
    dispatch({
      type: GET_NEWS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_NEWS,
    });
  }
};
