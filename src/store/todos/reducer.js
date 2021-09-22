import { ADD_TODO_LOADING, ADD_TODO_SUCCESS } from "./";

const initialState = {
  list: [
    {
      id: "1",
      text: "Todo 1",
      status: false,
    },
    {
      id: "2",
      text: "Todo 2",
      status: false,
    },
  ],
  loading: false,
  error: null,
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO_LOADING:
      return { ...state, loading: true };

    case ADD_TODO_SUCCESS:
      return { ...state, loading: false, list: [...state.list, payload] };

    default:
      return state;
  }
};
