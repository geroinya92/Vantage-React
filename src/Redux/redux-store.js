import mainReducer from "./Main-reducer";
import contactsReducer from "./Contacts-reducer";
import {combineReducers, createStore} from "@reduxjs/toolkit";
import TeamReducer from "./Team-reducer";

let reducers = combineReducers({
    Main: mainReducer,
    Contacts: contactsReducer,
    teamPage: TeamReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;