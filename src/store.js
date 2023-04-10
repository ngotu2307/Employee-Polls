import { createStore } from "redux";
import persistReducer from "./reducers";
import { persistStore } from 'redux-persist'
import middleware from "./middleware";

export const store = createStore(persistReducer, middleware);
export const persistor = persistStore(store)