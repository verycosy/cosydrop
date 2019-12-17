import React, { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from "./reducer";

const Context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(Context);
  return dispatch;
};

export const useState = () => {
  const { state } = useContext(Context);
  return state;
};

export default Provider;
