import { useState } from "react";

const TodoAdd = (props) => {
  const [text, setText] = useState("");

  const sendDataToParent = () => {
    props.cb({ type: "add", data: text });
  };

  const deleteHandler = () => {
    props.cb({ type: "delete", data: text });
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={sendDataToParent}>Add New</button>
    </>
  );
};

export default TodoAdd;
