import style from './Contact.module.css'
import React from 'react'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Button, TextareaAutosize} from "@mui/material";

function Contact(props) {

    const DialogElement = props.Contacts.dialogsData
        .map(dialog => <DialogItem user={dialog.user} id={dialog.id}/>)

    const messagesElements = props.Contacts.messagesData
        .map(message => <MessageItem message={message.message} id={message.id}/>);

    const newMessage = React.createRef();

    function CreateMessage() {
        props.createMessage()
    }

    function onMessageChange() {
        let text = newMessage.current.value;
        props.updateNewMessageText(text)
    }

    return (
        <div className={style.Wrapper}>
            <div className={style.container}>
                <div>
                    {DialogElement}
                </div>
                <div className={style.AllMessages}>
                    {messagesElements}
                    <div className={style.CreateMessage}>
                        <TextareaAutosize
                            ref={newMessage}
                            value={props.newMessageText}
                            aria-label="empty textarea"
                            placeholder="Start typing the message"
                            style={{height: 50}}
                            onChange={onMessageChange}
                        />
                        <Button
                            variant="contained"
                            style={{width: 80}}
                            onClick={CreateMessage}
                        >
                            Send
                        </Button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Contact