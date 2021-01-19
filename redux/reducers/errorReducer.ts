import { ERROR_NEWS } from "../Actions/types";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export const errorReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR_NEWS:
      return {
        msg: payload,
        status: payload,
        id: payload,
      };

    default:
      return state;
  }
};
