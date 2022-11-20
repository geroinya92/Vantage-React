import style from './DialogItem.module.css'
import React from 'react'
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <NavLink to={props.item}>
            <a>
                <div>
                    {props.name}
                </div>
            </a>
        </NavLink>
    )
}

export default DialogItem