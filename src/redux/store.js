// src/redux/store.js
import { createStore, combineReducers } from "redux";
import languageReducer from "./languageSlice";
import lastDataReducer from "./lastDataSlice";

const rootReducer = combineReducers({
    language: languageReducer,
    lastData: lastDataReducer,
});

const store = createStore(rootReducer);
export default store;
