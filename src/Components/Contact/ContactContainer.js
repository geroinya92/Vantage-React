import React from 'react'
import {createMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Contacts-reducer";
import Contact from "./Contact";
import StoreContext from "../../StoreContext";

function ContactContainer() {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                function CreateMessage() {
                    store.dispatch(createMessageActionCreator())
                }

                function onMessageChange(text) {
                    const action = updateNewMessageTextActionCreator(text)
                    store.dispatch(action);
                }

                return <Contact
                    updateNewMessageText={onMessageChange}
                    createMessage={CreateMessage}
                    newMessageText={state.Contacts.newMessageText}
                    state={state}
                />
            }
            }

        </StoreContext.Consumer>

    )
}

export default ContactContainer