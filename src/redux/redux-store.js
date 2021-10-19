import { combineReducers, createStore } from "redux";
import contentReducer from "./content-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    ContentPage: contentReducer,
    DialogPage: dialogReducer,
    usersPage: usersReducer
});


let store = createStore(reducers);


export default store;