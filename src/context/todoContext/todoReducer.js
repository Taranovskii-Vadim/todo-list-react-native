import { CHANGE_TODO_ID } from "./actions";

const HADNLERS = {
  [CHANGE_TODO_ID]: (state, { payload }) => ({ todoId: payload }),
  DEFAULT: state => state,
};

export const todoReducer = (state, action) => {
  const handler = HADNLERS[action.type] || HADNLERS.DEFAULT;
  return handler(state, action);
};
