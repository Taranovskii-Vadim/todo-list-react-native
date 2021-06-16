import React, { useReducer } from "react";

import { TodoContext } from "./index";
import { todoReducer } from "./todoReducer";

import { changeTodoId } from "./actions";

export const TodoState = ({ children }) => {
  const initialState = {
    todoId: null,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const setTodoId = id => dispatch(changeTodoId(id));

  return (
    <TodoContext.Provider value={{ todoId: state.todoId, setTodoId }}>
      {children}
    </TodoContext.Provider>
  );
};
