import style from './Service.module.css'
import React from 'react'
import {NavLink} from "react-router-dom";

function Service(props) {
    return (
        <div className={style.service}>
            <NavLink to={'/about/' + props.item}>
                {props.name}
            </NavLink>
        </div>

    )
}

export default Service