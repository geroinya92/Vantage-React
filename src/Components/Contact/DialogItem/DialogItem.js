import style from './DialogItem.module.css'
import React from 'react'
import {NavLink} from "react-router-dom";

function DialogItem(props) {

    return (
        <NavLink to={"/dialog/" + props.id}>
            <a>
                <div className={style.Dialogs}>
                    {props.user}
                </div>
            </a>
        </NavLink>
    )
}

export default DialogItem