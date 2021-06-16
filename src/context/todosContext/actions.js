export const ADD_TODO = "todosContext/ADD_TODO";
export const DELETE_TODO = "todosContext/DELETE_TODO";
export const CHANGE_TODO = "todosContext/CHANGE_TODO";

export const addTodo = payload => ({ type: ADD_TODO, payload });
export const deleteTodo = payload => ({ type: DELETE_TODO, payload });
export const changeTodo = (id, title) => ({
  type: CHANGE_TODO,
  payload: { id, title },
});
