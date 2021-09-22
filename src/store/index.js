import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export const ConfigureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
