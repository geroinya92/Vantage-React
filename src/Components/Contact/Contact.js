import style from './Contact.module.css'
import React from 'react'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

function Contact(props) {



    const DialogElement = props.dialogsData
        .map(dialog => <DialogItem user={dialog.user} id={dialog.id}/>)

    const messagesElements = props.messagesData
        .map(message => <MessageItem message={message.message} id={message.id}/>);

    return (
        <div className={style.Wrapper}>
            <div className={style.container}>
                <div>
                    {DialogElement}
                </div>
                <div className={style.AllMessages}>
                    {messagesElements}
                </div>

            </div>
        </div>
    )
}

export default Contact