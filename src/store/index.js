import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "../reducers";

function logger({ getState }) {
  return (next) => (action) => {
    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

const rootReducer = (state, action) => {
  if (action.type === "DESTROY_SESSION") {
    state = undefined;
  }
  return reducers(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});
export default store;
