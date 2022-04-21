import {
  REQUEST_TODO,
  REQUEST_TODO_FAILED,
  REQUEST_TODO_SUCCESS
} from "../reducers/TodoReducer";

const todoFetchSuccess = (todos) => ({
  type: REQUEST_TODO_SUCCESS,
  payload: {
    todos
  }
});

const todoFetchPending = () => ({
  type: REQUEST_TODO
});

const todoFetchFailed = (message) => ({
  type: REQUEST_TODO_FAILED,
  payload: {
    message
  }
});

export const getTodos = () => {
  return (dispatch) => {
    dispatch(todoFetchPending());
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(todoFetchSuccess(data));
      })
      .catch((err) => {
        dispatch(todoFetchFailed(err.message));
      });
  };
};

// https://jsonplaceholder.typicode.com/todos
