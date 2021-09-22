import { combineReducers } from "redux";
import { todoReducer } from "./todos";
import { userReducer } from "./users";

export default combineReducers({
  todo: todoReducer,
  user: userReducer,
});
