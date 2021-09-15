import { memo, useMemo } from 'react'

const TodoCard = (props) => {
  console.log("props: ", props.id);
  return <div>{props.foo}</div>;
};

export default memo(TodoCard);
// export default TodoCard;
