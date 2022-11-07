import style from './About.module.css'
import React from 'react'
import Service from "./Service/Service";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

function About() {
    return (
        <div className={style.container}>
            <div>
                <Service name={'Design'} item={'design'}/>
                <Service name={'Advice'} item={'advance'}/>
                <Service name={'Team'} item={'team'}/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default About