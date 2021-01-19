import { GET_NEWS } from "../Actions/types";

const initialState = {
  news: [],
  loading: false,
  error: null,
};

export const newsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NEWS:
      return {
        ...state,
        news: payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
