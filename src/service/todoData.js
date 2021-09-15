const todos = [
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
];

function addTodo(obj) {
  todos.push(obj);
  console.log(todos);
  return todos;
}

export { todos, addTodo };
