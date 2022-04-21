const userInitialState = {
  users: [],
  loading: false,
  message: ""
};

export const REQUEST_USER = "REQUEST_USER";
export const REQUEST_USER_SUCCESS = "REQUEST_USER_SUCCESS";
export const REQUEST_USER_FAILED = "REQUEST_USER_FAILED";

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        loading: true
      };
    case REQUEST_USER_SUCCESS:
      return {
        ...state,
        users: [...action.payload.users],
        loading: false
      };
    case REQUEST_USER_FAILED:
      return {
        ...state,
        message: action.payload.message,
        loading: false
      };
    default:
      return state;
  }
};
export default userReducer;
