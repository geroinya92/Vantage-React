import React from 'react'
import {createMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Contacts-reducer";
import Contact from "./Contact";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        Contacts: state.Contacts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createMessage: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        updateNewMessageText: () => {
            dispatch(createMessageActionCreator())
        },

    }
}

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default ContactContainer