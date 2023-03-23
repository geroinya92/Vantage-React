import React from 'react'
import avatar from '../../images/Snapseed.jpg'
import style from './MyProfile.module.css'
import ProfileStatus from './ProfileStatus'

const MyProfile = () => {

    return (
        <div className={style.Wrapper}>
            <div className={style.Wrapper__container}>
                <img src={avatar} alt="#"/>
                <h2>Name NoName</h2>
                
                <ProfileStatus status={'I\'m fine'} />
                
            </div>

        </div>
    )
}

export default MyProfile