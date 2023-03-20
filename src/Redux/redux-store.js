import mainReducer from "./Main-reducer";
import contactsReducer from "./Contacts-reducer";
import {applyMiddleware, combineReducers, createStore} from "@reduxjs/toolkit";
import TeamReducer from "./Team-reducer";
import designerProfileReducer from "./DesignerProfile-reducer"
import authReducer from "./Auth-reducer";
import thunkMiddleWare from 'redux-thunk'

let reducers = combineReducers({
    Main: mainReducer,
    Contacts: contactsReducer,
    teamPage: TeamReducer,
    designerProfile: designerProfileReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;