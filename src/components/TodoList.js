import { useSelector } from "react-redux";
import { TodoCard, TodoAdd } from "./";

export const TodoList = () => {
  const { list, loading, error } = useSelector(({ todo }) => todo);

  return (
    <>
      <TodoAdd />
      {loading && <p>Loading...</p>}
      {list.map((item, idx) => {
        return <TodoCard key={idx} id={item.id} foo={item.text} />;
      })}
    </>
  );
};
