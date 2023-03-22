import React from 'react'
import avatar from '../../images/Snapseed.jpg'
import style from './MyProfile.module.css'
import {Navigate} from "react-router-dom";

const MyProfile = (props) => {
    if (!props.isAuth) return <Navigate to={'/login'}/>
    return (
        <div className={style.Wrapper}>
            <div className={style.Wrapper__container}>
                <img src={avatar} alt="#"/>
                <span>Name NoName</span>
            </div>

        </div>
    )
}

export default MyProfile