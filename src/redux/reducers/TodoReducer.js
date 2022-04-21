const todoInitialState = {
  todos: [],
  loading: false,
  message: ""
};

export const REQUEST_TODO = "REQUEST_TODO";
export const REQUEST_TODO_SUCCESS = "REQUEST_TODO_SUCCESS";
export const REQUEST_TODO_FAILED = "REQUEST_TODO_FAILED";

const todoReducer = (state = todoInitialState, action) => {
  switch (action.type) {
    case REQUEST_TODO:
      return {
        ...state,
        loading: true
      };
    case REQUEST_TODO_SUCCESS:
      return {
        ...state,
        todos: [...action.payload.todos],
        loading: false
      };
    case REQUEST_TODO_FAILED:
      return {
        ...state,
        message: action.payload.message,
        loading: false
      };
    default:
      return state;
  }
};
export default todoReducer;
