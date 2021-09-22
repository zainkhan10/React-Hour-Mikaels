import { memo } from "react";

export const TodoCard = memo((props) => {
  return <div>{props.foo}</div>;
});
