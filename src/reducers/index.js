import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import { loadingBarReducer } from "react-redux-loading-bar";

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const rootReducer = combineReducers({
    authedUser,
    users,
    questions,
    loadingBar: loadingBarReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authedUser']
};
   

export default rootReducer;