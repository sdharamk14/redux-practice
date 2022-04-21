const icecreamInitialState = {
  icecream: 0
};

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
