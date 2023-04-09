import React from 'react'
import {createMessageActionCreator} from "../../Redux/Contacts-reducer";
import Contact from "./Contact";
import {connect} from "react-redux";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "@reduxjs/toolkit";
import {withRouter} from "../About/Service/Team/DesignerProfile/DesignerProfileContainer";

let mapStateToProps = (state) => {
    return {
        Contacts: state.Contacts,
        messagesData: state.Contacts.messagesData,
        newMessageText: state.Contacts.newMessageText,
        isAuth: state.auth.isAuth,
    }
}



let mapDispatchToProps = (dispatch) => {
    return {
        createMessage: (newMessageText) => {
            dispatch(createMessageActionCreator(newMessageText))
        },
    }
}

class ContactContainer extends React.Component {
    render() {
        return (
                <Contact
                    {...this.props}
                />
        )
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthNavigate
)(ContactContainer)