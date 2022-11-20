import style from './Slogan.module.css';
import React from 'react';
import heart from './heart.png'


function Slogan () {
    return (
        <div className={style.container}>
            Architecture Made With <img src={heart}/>
        </div>
    )
}

export default Slogan;