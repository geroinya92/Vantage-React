import React from 'react'
import {createMessageActionCreator} from "../../Redux/Contacts-reducer";
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

        createMessage: (newMessageText) => {
            dispatch(createMessageActionCreator(newMessageText))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate,
)(Contact)