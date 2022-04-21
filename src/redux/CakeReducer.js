const cakeInitialState = {
  cake: 0
};

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case "ADD_CAKE":
      return {
        cake: state.cake + 1
      };
    case "DEC_CAKE":
      return {
        cake: state.cake - 1
      };
    default:
      return state;
  }
};
export default cakeReducer;
