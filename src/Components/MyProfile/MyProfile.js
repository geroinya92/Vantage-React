import React from 'react'
import avatar from '../../images/Snapseed.jpg'
import style from './MyProfile.module.css'

const MyProfile = () => {

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