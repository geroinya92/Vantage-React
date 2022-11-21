import style from './DialogItem.module.css'
import React from 'react'
import {NavLink} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
function DialogItem(props) {

    return (
        <NavLink to={"/dialog/" + props.id}>

            <a>
                <div className={style.Dialogs}>
                    <Avatar alt={props.user} />
                    {props.user}
                </div>
            </a>
        </NavLink>
    )
}

export default DialogItem