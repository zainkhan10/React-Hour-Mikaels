import { useCallback, useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import TodoAdd from "./TodoAdd";
import { addTodo, todos } from "./service/todoData";

function TodoList() {
  const [list, setList] = useState(todos);

  const todoAddHandler = (obj) => {
    if (obj.type === "add") {
      setList([...addTodo(obj.data)]);
    } else if (obj.type === "delete") {
      // delete
    }
    console.log(obj);
  };

  return (
    <>
      <TodoAdd cb={todoAddHandler} />
      {list.map((item, idx) => {
        return <TodoCard key={idx} id={item.id} foo={item.text} />;
      })}
    </>
  );
}

export default TodoList;
