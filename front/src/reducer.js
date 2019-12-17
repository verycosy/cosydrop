import { SET_USERNAME, SET_NAMESPACE } from "./actions";

export const initialState = {
  username: null,
  namespace: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.data
      };

    case SET_NAMESPACE:
      return {
        ...state,
        namespace: action.data
      };

    default:
      return;
  }
};

export default reducer;
