import React from "react";
import style from "./MessageItem.module.css";

function MessageItem(props) {

    return (
        <div className={style.Message}>
            <div>{props.message}</div>
            <div>{props.id}</div>
        </div>
    )
}

export default MessageItem