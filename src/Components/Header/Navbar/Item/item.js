import style from './Item.module.css'
import React from 'react'
import {NavLink} from "react-router-dom";

function Item(props) {
    return (
        <div className={style.navBarItem}>
            <NavLink to={props.name}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default Item