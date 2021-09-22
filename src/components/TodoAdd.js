import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, ADD_TODO_LOADING } from "../store/todos";

export const TodoAdd = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const addTodoHandler = () => {
    dispatch({ type: ADD_TODO_LOADING });
    setTimeout(() => {
      dispatch(
        addTodo({
          id: Date.now().toString(),
          text,
        })
      );
    }, 5000);
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      <button onClick={addTodoHandler}>Add New</button>
    </>
  );
};
