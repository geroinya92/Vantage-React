import style from './Contact.module.css'
import React from 'react'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm, reset} from "redux-form";
import {Textarea} from "../comon/FormsControls/FormsControls";
import {requiredField} from "../../utilities/Validations/validations";
import {Button} from "@mui/material";

const ContactForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageText' component={Textarea} placeholder='Enter your message'
                       validate={[requiredField]}/>
            </div>
            <div>
                <Button type={'submit'} variant={'contained'}>
                    Send
                </Button>
            </div>

        </form>
    )
}

const ContactReduxForm = reduxForm({form: 'messageOnContact'})(ContactForm)

function Contact(props) {

    const DialogElement = props.Contacts.dialogsData
        .map(dialog => <DialogItem user={dialog.user} key={dialog.id} id={dialog.id}/>)

    const messagesElements = props.Contacts.messagesData
        .map(message => <MessageItem message={message.message} key={message.id} id={message.id}/>);

    let addNewMessage = (values, dispatch) => {
        props.createMessage(values.newMessageText)
        dispatch(reset('messageOnContact'))
    }
    return (
        <div className={style.Wrapper}>
            <div className={style.container}>
                <div className={style.Sidebar}>
                    {DialogElement}
                </div>
                <div className={style.AllMessages}>
                    {messagesElements}
                    <div className={style.CreateMessage}>
                        <ContactReduxForm onSubmit={addNewMessage}/>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Contact