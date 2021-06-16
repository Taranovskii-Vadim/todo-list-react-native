import React, { useReducer } from "react";
import axios from "axios";

import { todosReducer } from "./todosReducer";
import { TodosContext } from "./index";

import {
  addTodo,
  changeLoading,
  changeTodo,
  deleteTodo,
  fetchTodos,
  setError,
} from "./actions";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const TodosState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(todosReducer, initialState);

  const onAddTodo = async title => dispatch(addTodo(title));

  const onDeleteTodo = async id => {
    await axios.delete(`${BASE_URL}/todos/${id}`);
    dispatch(deleteTodo(id));
  };

  const onChangeTodo = (id, title) => dispatch(changeTodo(id, title));

  // const resetError = () => dispatch(setError(null));

  const onFetchTodos = async () => {
    try {
      dispatch(changeLoading());
      const { data } = await axios.get(`${BASE_URL}/todos`);
      dispatch(
        fetchTodos(data.map(item => ({ id: item.id, title: item.title })))
      );
    } catch (e) {
      dispatch(setError(e.message));
    } finally {
      dispatch(changeLoading());
    }
  };

  return (
    <TodosContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        onAddTodo,
        onDeleteTodo,
        onChangeTodo,
        onFetchTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
