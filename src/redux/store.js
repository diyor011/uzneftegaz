// src/redux/store.js
import { createStore, combineReducers } from "redux";
import languageReducer from "./languageSlice";

const rootReducer = combineReducers({
    language: languageReducer,
});

const store = createStore(rootReducer);
export default store;
