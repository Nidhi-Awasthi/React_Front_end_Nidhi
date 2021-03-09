/**
 * App Reducers
 */
import { combineReducers } from "redux";
import Card from "./Card";
const reducers = combineReducers({
  Card: Card,
});

export default reducers;
