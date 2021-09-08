import { useState } from "react";
import TodoCard from "./TodoCard";
import TodoAdd from "./TodoAdd";

function TodoList() {
  const [text, setText] = useState("");
  const [list, setList] = useState([
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
  ]);

  const addNewItem = () => {
    setList([
      ...list,
      {
        id: `${list.length}`,
        text: `Todo ${list.length}`,
        status: false,
      },
    ]);
  };

  const todoAddHandler = (obj) => {
      if (obj.type === "add") {
          // add 
      } else if (obj.type === "delete") {
          // delete
      }
      console.log(obj);
  }

  return (
    <>
      <TodoAdd cb={todoAddHandler} />
      {list.map((item) => {
        return <TodoCard key={item.id} id={item.id} foo={item.text} />;
      })}
    </>
  );
}

export default TodoList;
