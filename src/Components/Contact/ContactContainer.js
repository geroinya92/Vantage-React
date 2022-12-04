import React from 'react'
import {createMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Contacts-reducer";
import Contact from "./Contact";


function ContactContainer(props) {

    function CreateMessage() {
        props.dispatch(createMessageActionCreator())
    }

    function onMessageChange(text) {
        const action = updateNewMessageTextActionCreator(text)
        props.dispatch(action);
    }

    return (
        <Contact
            updateNewMessageText={onMessageChange}
            createMessage={CreateMessage}
            newMessageText={props.state.Contacts.newMessageText}
            state={props.state}
        />


    )
}

export default ContactContainer