import {
  REQUEST_USER,
  REQUEST_USER_FAILED,
  REQUEST_USER_SUCCESS
} from "../reducers/UserReducer";

const userFetchSuccess = (data) => ({
  type: REQUEST_USER_SUCCESS,
  payload: {
    users: data
  }
});

const userFetchPending = () => ({
  type: REQUEST_USER
});

const userFetchFailed = (message) => ({
  type: REQUEST_USER_FAILED,
  payload: {
    message
  }
});

export const getUsers = () => {
  return (dispatch) => {
    dispatch(userFetchPending());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(userFetchSuccess(data));
      })
      .catch((err) => {
        dispatch(userFetchFailed(err.message));
      });
  };
};
