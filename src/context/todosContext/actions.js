export const ADD_TODO = "todosContext/ADD_TODO";
export const DELETE_TODO = "todosContext/DELETE_TODO";
export const CHANGE_TODO = "todosContext/CHANGE_TODO";
export const FETCH_TODOS = "todosContext/FETCH_TODOS";
export const TOGGLE_LOADING = "todosContext/TOGGLE_LOADING";
export const SET_ERROR = "todosContext/SET_ERROR";

export const addTodo = payload => ({ type: ADD_TODO, payload });
export const changeLoading = () => ({ type: TOGGLE_LOADING });
export const setError = payload => ({ type: SET_ERROR, payload });
export const fetchTodos = payload => ({ type: FETCH_TODOS, payload });
export const deleteTodo = payload => ({ type: DELETE_TODO, payload });
export const changeTodo = (id, title) => ({
  type: CHANGE_TODO,
  payload: { id, title },
});
