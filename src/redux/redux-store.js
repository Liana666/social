import { combineReducers, createStore } from "redux";
import contentReducer from "./content-reducer";
import dialogReducer from "./dialog-reducer";

let reducers = combineReducers({
    ContentPage: contentReducer,
    DialogPage: dialogReducer
});

let store = createStore(reducers);

export default store;