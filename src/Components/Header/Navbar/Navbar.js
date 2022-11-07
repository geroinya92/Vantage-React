import style from './Navbar.module.css'
import React from 'react'
import Slogan from './Slogan/Slogan'
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className={style.container}>
            <Slogan/>
            <div>
                <NavLink to={'/home'}>
                    HOME
                </NavLink>
            </div>
            <div>
                <NavLink to={'/about'}>
                    ABOUT
                </NavLink>
            </div>
            <div>
                <NavLink to={'/services'}>
                    SERVICES
                </NavLink>
            </div>
            <div>
                <NavLink to={'/projects'}>
                    PROJECTS
                </NavLink>
            </div>
            <div>
                <NavLink to={'/news'}>
                    NEWS
                </NavLink>
            </div>
            <div>
                <NavLink to={'/contact'}>
                    CONTACT
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar