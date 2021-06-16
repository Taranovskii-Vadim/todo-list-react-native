import {
  ADD_TODO,
  CHANGE_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  SET_ERROR,
  TOGGLE_LOADING,
} from "./actions";

const HADNLERS = {
  [FETCH_TODOS]: (state, { payload }) => ({ ...state, todos: payload }),
  [SET_ERROR]: (state, { payload }) => ({ ...state, error: payload }),
  [ADD_TODO]: (state, { payload }) => ({
    ...state,
    todos: [...state.todos, { id: state.todos.length + 1, title: payload }],
  }),
  [DELETE_TODO]: (state, { payload }) => ({
    ...state,
    todos: state.todos.filter(item => item.id !== payload),
  }),
  [TOGGLE_LOADING]: state => ({ ...state, loading: !state.loading }),
  [CHANGE_TODO]: (state, { payload }) => ({
    ...state,
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
