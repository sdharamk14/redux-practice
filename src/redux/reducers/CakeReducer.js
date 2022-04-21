const cakeInitialState = {
  cake: 1
};

export const ADD_CAKE = "ADD_CAKE";
export const DEC_CAKE = "DEC_CAKE";

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case ADD_CAKE:
      return {
        cake: state.cake + 1
      };
    case DEC_CAKE:
      return {
        cake: state.cake - 1
      };
    default:
      return state;
  }
};
export default cakeReducer;
