import * as actionType from "../types";

const initState = {
  counter: 0
};

export const addReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_ONE:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case actionType.ADD_TWO:
      return {
        counter: state.counter + action.payload
      };
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
