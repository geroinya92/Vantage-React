import mainReducer from "./Main-reducer";
import contactsReducer from "./Contacts-reducer";
import {combineReducers, createStore} from "@reduxjs/toolkit";

let reducers = combineReducers({
    Main: mainReducer,
    Contacts: contactsReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;