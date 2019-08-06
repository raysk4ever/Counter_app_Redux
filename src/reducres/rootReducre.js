import { combineReducers } from "redux";
import { addReducer } from "./addReducer";
// import subtractReducer from "./subtractReducer";

const rootReducer = combineReducers({ addReducer });

export default rootReducer;
