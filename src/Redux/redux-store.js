import mainReducer from "./Main-reducer";
import contactsReducer from "./Contacts-reducer";
import {combineReducers, createStore} from "@reduxjs/toolkit";
import TeamReducer from "./Team-reducer";
import designerProfileReducer from "./DesignerProfile-reducer"

let reducers = combineReducers({
    Main: mainReducer,
    Contacts: contactsReducer,
    teamPage: TeamReducer,
    designerProfile: designerProfileReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;