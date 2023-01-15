import React, { useState } from "react";
import Child_Props from "./Child_Props";
import Child_Named from "./Child_Named";

const Parent = () => {
  const [message_Props, setMessage_Props] = useState("Hello from Parent");
  const [message_Named, setMessage_Named] = useState("Hello from Parent");

  const handleChange_Props = (e) => {
    setMessage_Props(e.target.value);
  };

  const handleChange_Named = (e) => {
    setMessage_Named(e.target.value);
  };

  return (
    <div>
      <span>passed as props: </span>
      <input type="text" value={message_Props} onChange={handleChange_Props} />
      <Child_Props message={message_Props} />
      <br /> <br /> <br /> <br />
      <span>passed as named variable: </span>
      <input type="text" value={message_Named} onChange={handleChange_Named} />
      <Child_Named message={message_Named} />
    </div>
  );
};

export default Parent;
