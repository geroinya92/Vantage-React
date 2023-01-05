import style from '../../Contact/DialogItem/DialogItem.module.css'
import React from 'react'
import {NavLink} from "react-router-dom";

function Service(props) {
    return (
        <NavLink to={props.item}>
            <a>
                <div className={style.Dialogs}>
                    {props.name}
                </div>
            </a>
        </NavLink>
    )
}

export default Service