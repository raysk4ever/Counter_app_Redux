import * as actionTypes from "../types";

export const addOne = () => ({
  type: actionTypes.ADD_ONE,
  payload: 1
});
export const addTwo = () => ({
  type: actionTypes.ADD_TWO,
  payload: 2
});
export const subOne = () => ({
  type: actionTypes.SUB_ONE,
  payload: 1
});
export const subTwo = () => ({
  type: actionTypes.SUB_TWO,
  payload: 2
});
