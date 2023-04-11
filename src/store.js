import { createStore } from "redux";
import persistReducer from "./reducers";
import middleware from "./middleware";

export const store = createStore(persistReducer, middleware);