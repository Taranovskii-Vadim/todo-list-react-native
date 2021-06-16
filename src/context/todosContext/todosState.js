import React, { useReducer } from "react";

import { todosReducer } from "./todosReducer";
import { TodosContext } from "./index";

import { addTodo, changeTodo, deleteTodo } from "./actions";

export const TodosState = ({ children }) => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(todosReducer, initialState);

  const onAddTodo = title => dispatch(addTodo(title));

  const onDeleteTodo = id => dispatch(deleteTodo(id));

  const onChangeTodo = (id, title) => dispatch(changeTodo(id, title));

  return (
    <TodosContext.Provider
      value={{ todos: state.todos, onAddTodo, onDeleteTodo, onChangeTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};
