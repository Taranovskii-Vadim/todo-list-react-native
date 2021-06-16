import { ADD_TODO, CHANGE_TODO, DELETE_TODO } from "./actions";

const HADNLERS = {
  [ADD_TODO]: (state, { payload }) => ({
    todos: [...state.todos, { id: state.todos.length + 1, title: payload }],
  }),
  [DELETE_TODO]: (state, { payload }) => ({
    todos: state.todos.filter(item => item.id !== payload),
  }),
  [CHANGE_TODO]: (state, { payload }) => ({
    todos: state.todos.map(item => {
      if (item.id === payload.id) {
        item.title = payload.title;
      }
      return item;
    }),
  }),
  DEFAULT: state => state,
};

export const todosReducer = (state, action) => {
  const handler = HADNLERS[action.type] || HADNLERS.DEFAULT;
  return handler(state, action);
};
