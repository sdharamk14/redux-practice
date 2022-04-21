const icecreamInitialState = {
  icecream: 0
};

export const ADD_ICECREAM = "ADD_ICECREAM";
export const DEC_ICECREAM = "DEC_ICECREAM";

const icecreamReducer = (state = icecreamInitialState, action) => {
  switch (action.type) {
    case "ADD_ICECREAM":
      return {
        icecream: state.icecream + 1
      };
    case "DEC_ICECREAM":
      return {
        icecream: state.icecream - 1
      };
    default:
      return state;
  }
};

export default icecreamReducer;
