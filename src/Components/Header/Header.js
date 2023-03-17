import style from './Header.module.css'
import React from 'react'
import Navbar from './Navbar/Navbar'
import logo from './logo.png'
import interior from './interior.png'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <div className={style.Wrapper}>
            <div className={style.Wrapper__container}>
                <div className={style.Wrapper__container_logo}>
                    <img src={logo} alt="Vantage"/>
                </div>
                <Navbar {...props} />

                {/*<img src={interior} className={style.Wrapper__container_interior} alt="Interior"/>
                <div className={style.yellowBlock}/>
                <div className={style.whiteBlock}>
                    <h1>Your vision, our expertise!</h1>
                </div>*/}
            </div>
        </div>

    )
}

export default Header