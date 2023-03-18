import { combineReducers } from "redux";
import reducer from "./reducer/reducer";
import authReducer from "./reducer/authReducer";

const rootReducer = combineReducers({
  tasks: reducer,
  auth: authReducer,
});

export default rootReducer;
