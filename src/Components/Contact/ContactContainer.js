import React from 'react'
import {createMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Contacts-reducer";
import Contact from "./Contact";
import {connect} from "react-redux";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";

let mapStateToProps = (state) => {
    return {
        Contacts: state.Contacts,
        messagesData: state.Contacts.messagesData,
        newMessageText: state.Contacts.newMessageText,
    }
}



let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },

        createMessage: () => {
            dispatch(createMessageActionCreator())
        },
    }
}

let AuthNavigateComponent = withAuthNavigate(Contact)

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent);

export default ContactContainer