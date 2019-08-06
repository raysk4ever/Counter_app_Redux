import * as actionType from "../types";
const init = {
  counter: 0
};
const subtractReducer = (state = init, action) => {
  switch (action.type) {
    case actionType.SUB_ONE:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case actionType.SUB_TWO:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    default:
      return state;
  }
};

export default subtractReducer;
