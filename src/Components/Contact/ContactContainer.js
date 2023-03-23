import React from 'react'
import {createMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Contacts-reducer";
import Contact from "./Contact";
import {connect} from "react-redux";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "@reduxjs/toolkit";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate,
)(Contact)