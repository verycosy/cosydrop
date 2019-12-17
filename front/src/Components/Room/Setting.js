import React, { useState, useCallback } from "react";
import { useDispatch } from "../../context";
import { SET_USERNAME, SET_NAMESPACE } from "../../actions";

export default ({ type }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const changeHandler = useCallback(evt => setText(evt.target.value), []);
  const clickHandler = useCallback(() => {
    dispatch({
      type: type === "username" ? SET_USERNAME : SET_NAMESPACE,
      data: text
    });

    setText("");
  }, [text, type, dispatch]);

  return (
    <div>
      <input
        type="text"
        placeholder={type === "username" ? "username" : "namespace"}
        value={text}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>ok</button>
    </div>
  );
};
