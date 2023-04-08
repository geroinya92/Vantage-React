import style from './About.module.css'
import React from 'react'
import Service from "./Service/Service";
import {Navigate, Outlet} from "react-router-dom";

function About() {
    return (
        <div className={style.Wrapper}>
        <div className={style.container}>
            <div className={style.Sidebar}>
                <Service name={'Design'} item={'design'}/>
                <Service name={'Advice'} item={'advance'}/>
                <Service name={'Team'} item={'team'}/>
            </div>
            <div className={style.Info}>
                <Outlet />
            </div>
        </div>
        </div>
    )
}

export default About