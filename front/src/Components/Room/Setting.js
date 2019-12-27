import React, { useState, useCallback } from "react";

export default ({ fn }) => {
  const [text, setText] = useState("");

  const changeHandler = useCallback(evt => setText(evt.target.value), []);
  const clickHandler = useCallback(() => {
    localStorage.setItem("username", text);
    fn(text);
  }, [text, fn]);

  return (
    <>
      <input
        type="text"
        placeholder={"username"}
        value={text}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>I like my name :)</button>
    </>
  );
};
