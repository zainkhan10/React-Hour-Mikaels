import { ADD_TODO_SUCCESS } from "./";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: todo,
  };
};
